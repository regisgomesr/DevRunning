import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import store from './redux'
import { Provider } from 'react-redux'

import Header from './Header'

class App extends Component {
/*
  async componentDidMount(){
    let token = localStorage.getItem('token')
    
    if(!token){
      const login = await axios.post('http://localhost:3001/users/login', {
      email: 'tuliofaria@devpleno.com',
      passwd: 'abc123'
      })
      token = login.data.token
      localStorage.setItem('token', token)
     
    }
    const decoded = jwtDecode(token)
    console.log(decoded)
    
    const user = await axios.get('http://localhost:3001/users/me', {
      headers: {
        Authorization: 'Bearer '+token
      }
    })
    console.log(user)
  }
    */
  render(){
    return (

      <Provider store={store}>
        <div className="App">
          < Header />
        </div>
      </Provider>
    )
  }
}

export default App;
