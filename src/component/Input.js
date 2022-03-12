import React from 'react'

export default function Input(props) {
    const{name,onChange,label,type,error}=props
    const isError=error ? "form-control is-invalid" : "form-control"
  return (
    <div className="form-group mt-3">
    <label className='form-label'>{label}</label>
    <input className={isError} name={name} onChange={onChange} type={type}></input>
    {isError &&
      <div className="invalid-feedback">
        {error}
    </div>
    }
    </div>
  
   
    
  )
}
