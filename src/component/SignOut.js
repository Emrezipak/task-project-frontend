import React from 'react'
import { Link } from 'react-router-dom'
export const SignOut=()=>{
  return (
    <div>
         <ul className='navbar-nav ms-auto'>
            <li>
              <Link to="/signup" className='nav-link'>Register</Link>
            </li>
            <li>
              <Link to="/login" className='nav-link'>Log In</Link>
            </li>
            </ul>
    </div>
  )
}
