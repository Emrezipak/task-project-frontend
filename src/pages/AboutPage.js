import React from 'react'
import linkedln from '../icon/linkedin.png'
import github from '../icon/github.png'
export const AboutPage=()=> {
  return (
 <div className='container card-page mt-4'>
  <div className="card text-dark bg-light">
  <div className="card-header text-center">Contact</div>
  <div className="card-body text-center">
    <a href="https://www.linkedin.com/in/emre-zipak-154182206/" target="_blank" className='navbar-brand'><img src={linkedln} width="30" alt="Linkedln logo" /></a>
    <a href="https://github.com/Emrezipak" target="_blank" className='navbar-brand'><img src={github} width="30" alt="Github logo" /></a>
  </div>
</div>
</div>
  )
}
