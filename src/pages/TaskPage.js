import React, { useState } from 'react'
import Input from '../component/Input';
import { addTask } from '../Api/ApiCalls';
import { ButtonProgress } from '../component/ButtonProgress';
import { toast } from 'react-toastify'
const TaskPage = (props) => {
  const [task,setTask]=useState({
    start_date: null,
    start_time: null,
    stop_time: null,
    description: null,
  })
  const [errors,setErrors]=useState({})
  const [sendRequest,setSendRequest]=useState()

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    const copyErrors = { ...errors }
    const copyTask={...task}
    copyErrors[name] = undefined
    copyTask[name]=value
    setErrors(copyErrors)
    setTask(copyTask)
  }
 const onClickAddTask = async (event) => {
    event.preventDefault()
    setSendRequest(true)
    const { start_date, start_time, stop_time, description } = task;
    const { match } = props;
    const { userEmail } = match.params;
    const body = {
      start_date, start_time, stop_time, description, userEmail
    }
    try {
      const response = await addTask(body);
      setSendRequest(false)
      toast.success(`${userEmail} kişili kullanıcıya görev başarı ile eklendi`)

    }
    catch (error) {
      if (error.response.data.validations) {
         setErrors(error.response.data.validations)
      }
    }
   setSendRequest(false)
  }
    const { start_date, start_time, stop_time, description } = errors;
    const isError = description ? "form-control is-invalid" : "form-control"
    return (
      <div className='container mt-5'>
        <Input name="start_date" label="Date" type="date" onChange={onChangeInput} error={start_date} />
        <Input name="start_time" label="Start time" type="time" onChange={onChangeInput} error={start_time} />
        <Input name="stop_time" label="Stop time" type="time" onChange={onChangeInput} error={stop_time} />
        <div className="form-group mt-4">
          <label for="description" className="form-label">Description</label>
          <textarea className={isError} name="description" onChange={onChangeInput}></textarea>
          {isError &&
            <div className="invalid-feedback">
              {description}
            </div>
          }
        </div>
        <div className='form-group mt-4 text-center'>
          <ButtonProgress label="Add Task" btnstyle="btn btn-secondary" onClick={onClickAddTask} sendRequest={sendRequest} buttonDisabled={sendRequest} />
        </div>

      </div>
    )
  }
export default TaskPage;