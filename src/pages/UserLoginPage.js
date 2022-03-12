import React, { useEffect, useState } from "react"
import Input from "../component/Input"
import { ButtonProgress } from "../component/ButtonProgress"
import { login } from '../Api/ApiCalls'
import { setLocalStorage } from "../Api/DataService"
import { loginSuccessAction } from "../Redux/AuthActions"
import { useDispatch } from "react-redux"
const UserLoginPage = (props) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [sendRequest, setSendRequest] = useState(false)
  const [error, setError] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    setError(undefined)
  }, [email, password])

  const onClickLogin = async (event) => {
    event.preventDefault()
    setSendRequest(true)
    setError(undefined)
    const { history } = props;
    const { push } = history
    try {
      const response = await login(email, password)
      setLocalStorage(response.data);
      const data = {
        email,
        name: response.data.user.name,
        password
      }
      dispatch(loginSuccessAction(data))
      push("/")
    }
    catch (error) {
      if (error.response.data.message) {
        setError(error.response.data.message)
      }
    }
    setSendRequest(false)
  }
  const buttonDisabled = email && password
  return (
    <div className='container mt-3'>
      <form>
        <h3 className="text-center">Login Page</h3>
        <Input name="email" label="Email" onChange={(event) => { setEmail(event.target.value)}} />
        <Input name="password" label="Password" type="password" onChange={(event) => { setPassword(event.target.value)}} />
        <div className="text-center mt-3">
          <ButtonProgress
            label={"Login"}
            onClick={onClickLogin}
            buttonDisabled={!buttonDisabled}
            sendRequest={sendRequest}
            btnstyle="btn btn-danger"
          />
        </div>
      </form>
      {error &&
        <div className="alert alert-primary mt-4">
          {error}
        </div>
      }

    </div>
  )

}

export default UserLoginPage