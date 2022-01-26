import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/reducers/userReducer';
import style from './Navbar.module.scss'
import './Navbar.css'

function Navbar() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.navbar__header}>TEST</div>
        {isAuth && <div className={style.navbar__login}><NavLink activeClassName='activeLink' to='/main'>Main</NavLink></div>}
        {isAuth && <div className={style.navbar__login}><NavLink activeClassName='activeLink' to='/create'>CreateNew</NavLink></div>}
        {isAuth && <div className={style.navbar__login}><NavLink activeClassName='activeLink' to='/forms'>Forms</NavLink></div>}
        {isAuth && <div className={style.navbar__login}><NavLink activeClassName='activeLink' to='/dashboard'>Dashboard</NavLink></div>}
        {/* {!isAuth && <div className={style.navbar__login}><NavLink to='/login'>Log in</NavLink></div>} */}
        {isAuth && <div className={style.navbar__login__logout} onClick={() => dispatch(logout()) }>Выход</div> }
      </div>
    </div>
  )
}

export default Navbar;