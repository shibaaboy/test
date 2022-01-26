import React, { useState } from 'react';
import style from './CreateNew.module.scss'

function CreateNew() {

  const [fruit, setFruit] = useState('')
  const [txtarea, setTxtarea] = useState('')
  const [city, setCity] = useState('')
  const [radio, setRadio] = useState('')
  const [btn, setBtn] = useState(false)

  function btnValid() {
    if (fruit !== '' && txtarea !== '' && city !== '' && radio !== '') {
      alert('Ok')
      setBtn(true)
    } else {
      setBtn(false)
      alert('Error')
    }
  }

  function Fetch() {
    const myUrl = 'http://127.0.0.1:3001/create-form';
    const obj = {
      "fruit": fruit,
      "txtarea": txtarea,
      "city": city,
      "radio" : radio,
    }
    fetch(myUrl, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.json())
        alert('Confirm!')
        setFruit('')
        setTxtarea('')
        setCity('')
        setRadio('')
        setBtn(false)
      })
  }

  return (
    <div className={style.create__wrapper}>
      <h1>Create New</h1>
      <div>
        <h3>First</h3>
        <select defaultValue={fruit} onChange={(evt) => {setFruit(evt.target.value)}}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
      <div>
        <h3>Second</h3>
        <textarea className={style.txtarea} value={txtarea} onChange={(evt) => setTxtarea(evt.target.value)} maxLength='100' />
      </div>
      <div>
        <h3>Third</h3>
        <input
          type="text"
          id="city"
          value={city}
          name="city"
          list="city-list"
          onChange={(evt) => setCity(evt.target.value)} />
        <datalist id="city-list">
          <option>Москва</option>
          <option>Санкт-Петербург</option>
          <option>Владивосток</option>
          <option>Севастополь</option>
          <option>Хабаровск</option>
        </datalist>
      </div>
      <div>
        <h3>Fourth</h3>
        <div className={style.radio__wrapper}>
          <label htmlFor="first">%</label>
          <input className={style.input__radio}
            type="radio"
            name="test"
            id="first"
            onChange={() => setRadio("%")} />
          <label htmlFor="second">$</label>
          <input
            className={style.input__radio}
            type="radio"
            name="test"
            id="second"
            onChange={() => setRadio("$")} />
        </div>
      </div>
      <button className={style.test__button} type="submit" onClick={btnValid}>Test your form</button>
      <button disabled={!btn} onClick={Fetch}>Send</button>
    </div>
  )
}

export default CreateNew;