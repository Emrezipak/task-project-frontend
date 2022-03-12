import React from 'react'
import "../index.css"
export const HomePage=()=> {
  return (
    <div className='container card-page mt-4'>
  <div className="card text-dark bg-light">
  <div className="card-header">Emre Zipak</div>
  <div className="card-body">
    <p className="card-text">
      Hi, I have created two roles, admin and user, admin users can add and delete tasks, I created a project where the user can only see the tasks added to it
      With spring security, I developed a project where the user can log in and after logging in, a jwt token belonging to the user is generated and only logged in and authorized users can take action.
    </p>
  </div>
</div>
    </div>
  )
}
