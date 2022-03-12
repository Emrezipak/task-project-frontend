import React, { useEffect, useState } from 'react'
import '../index.css';
import icon from "../icon/task.png"
import { Link } from 'react-router-dom';
import {SignIn} from './SignIn';
import {SignOut} from './SignOut'
import { currentUser } from '../Api/DataService';
import { logout } from '../Redux/AuthActions';
import { useSelector,useDispatch } from 'react-redux';
const Navbar = (props) => {
  const [userBoard, setUserBoard] = useState(false);
  const [adminBoard, setAdminBoard] = useState(false);
  const dispatch=useDispatch();
  const isLogin=useSelector((store)=>store.isLogin)
  const user =currentUser();

  useEffect(() => {
    if (user && isLogin) {
      setUserBoard(user.roles.includes("User"))
      setAdminBoard(user.roles.includes("Admin"))
    }
  })

  const logoutSuccess=()=>{
    dispatch(logout())
  }
  return (
    <div className="nvb">
      <nav className="navbar container navbar-light navbar-expand">
        <Link to="/" className='navbar-brand'><img src={icon} width="50" alt="Hoaxify logo" /></Link>
        <ul className='navbar-nav float-left'>
          <li>
            <Link to="/" className='nav-link active'>Home</Link>
          </li>
          {adminBoard &&
            <li>
              <Link to="/users" className='nav-link'>Users</Link>
            </li>
          }
          {adminBoard &&
             <li>
             <Link to="/taskList" className='nav-link'>Task List</Link>
           </li>
          }

          {userBoard &&
              <li>
              <Link to="/userTasks" className='nav-link'>Profile</Link>
            </li>

          }
         
          <li>
            <Link to="/about" className='nav-link'>About</Link>
          </li>
        </ul>
        <ul className='navbar-nav ms-auto'>
          {isLogin ? <SignIn logoutSuccess={logoutSuccess} /> : <SignOut></SignOut>}
        </ul>
      </nav>

    </div>
  )
}
export default Navbar;