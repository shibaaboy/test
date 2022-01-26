import React, { useEffect, useState } from 'react';
import style from './Forms.module.scss'

function Forms() {
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:3001/forms')
    .then(response => response.json()) 
    .then((result) => {setItems(result)})
  }, [])

  return (
    <div className={style.wrapper}>
      {items.map((item,key) => (
          <div className={style.forms__wrapper} key={key}>
            <p>fruit: {item.fruit}</p>
            <p>txtarea: {item.txtarea}</p>
            <p>city: {item.city}</p>
            <p>type: {item.radio}</p>
          </div>
        ))}
    </div>
  )
}

export default Forms;