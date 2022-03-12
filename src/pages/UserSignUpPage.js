import React, { useEffect, useState } from "react"
import { signUp } from '../Api/ApiCalls'
import Input from "../component/Input"
import { ButtonProgress } from "../component/ButtonProgress"
const UserSignUpPage = (props) => {
  const [user, setUser] = useState({
    email: null,
    name: null,
    password: null
  })
  const [sendRequest, setSendRequest] = useState(false)
  const [errors, setErrors] = useState({})

  const onChangeInputValue = (event) => {
    const { value, name } = event.target;
    const copyUser={...user}
    const copyErrors={...errors}

    copyUser[name]=value
    copyErrors[name]=undefined
    
    setUser(copyUser)
    setErrors(copyErrors)
  }
  const onClickButton = async (event) => {
    event.preventDefault()
    setSendRequest(true)
    const { email, name, password } = user
    const {push}=props.history
    const body = {
      email, name, password
    }
    try {
      const response = await signUp(body)
      console.log(response.data)
      push("/login")
    }
    catch (error) {
      if (error.response.data.validations) {
        setErrors(error.response.data.validations)
      }
    }

    setSendRequest(false)

  }
  const userExistValidMessage = "this user is exist already";
  const { email, name, password } = errors
  return (
    <div className="container mt-3">
      <form>
        <h3 className='text-center '>Signup page</h3>
        <Input name="email" onChange={onChangeInputValue} label="Email" error={email} />
        <Input name="name" onChange={onChangeInputValue} label="Username" error={name} />
        <Input name="password" type="password" onChange={onChangeInputValue} label="Password" error={password} />
        <div className="text-center mt-3">
          <ButtonProgress
            label="Sign Up"
            buttonDisabled={sendRequest}
            sendRequest={sendRequest}
            onClick={onClickButton}
            btnstyle="btn btn-danger"
          />
        </div>
      </form>

    </div>
  )
}
export default UserSignUpPage
