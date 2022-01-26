import React, { useState } from 'react';
import style from './Login.module.scss'
import { login } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'

function Login() {

  // const reg = /(\+7)[\s(](\d{3})[\s)](\d{3})-[\s-]?(\d{2})-[\s-]?(\d{2})/g;
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  return (
    <div className={style.login__wrapper}>
      <h1>Welcome!</h1>
      <input type='text' name='text' value={phone} onChange={(evt)=> setPhone(evt.target.value)} placeholder="+7(9**)***-**-**" maxLength='16'></input>
      <input type='password' name='password' value={password} onChange={(evt)=> setPassword(evt.target.value)} placeholder="password" maxLength='10'></input>
      <button onClick={() => dispatch(login(phone,password))}>Log in!</button>
    </div>
  )
}

export default Login;