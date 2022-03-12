import React from 'react'

export const ButtonProgress= (props)=> {
const{label,sendRequest,onClick,buttonDisabled,btnstyle}=props
  return (
    <button type="submit" className={btnstyle} onClick={onClick} disabled={buttonDisabled} >
     {sendRequest ?
        <div>
        <span className="text-white">Loading </span>
        <span className="spinner-border spinner-border-sm text-white"/>
        </div>
        :label} 
        </button>
  )
}
