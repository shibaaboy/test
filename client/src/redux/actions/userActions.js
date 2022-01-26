import axios from 'axios'
import { setUser } from '../reducers/userReducer'

export const login = (userPhone, userPassword) => {
  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:3001/login`, {
        userPhone,
        userPassword
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
      console.log(response.data)
    } catch (err) {
      alert(err.response.data.message)
    }
  }
}