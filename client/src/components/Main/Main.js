import React, { useEffect, useState } from 'react';
import style from './Main.module.scss'

function Main() {

  const [info, setInfo] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:3001/auth')
    .then(response => response.json()) 
    .then((data) => {setInfo(data)})
  }, [])

  return (
    <div>
      {info.map((item,key) => (
          <div className={style.info__wrapper} key={key}>
            <h1>Info</h1>
            <p>My phone: {item.userPhone}</p>
            <p>My password: {item.userPassword}</p>
          </div>
        ))}
    </div>
  )
}

export default Main;