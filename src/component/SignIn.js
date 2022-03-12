import React from 'react'
export const SignIn=(props)=> {
  const {logoutSuccess}=props
  return (
    <div>
          <li>
          <a href="/home" onClick={logoutSuccess}  className='nav-link'>Logout</a>
          </li>

    </div>
  )
}
