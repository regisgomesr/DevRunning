import React, { Component } from 'react'

import store from './redux'
import { Provider } from 'react-redux'
import { 
    Route, 
    BrowserRouter as Router 
  } from 'react-router-dom'
 
import { Container } from 'semantic-ui-react'

import './global.css'

import Home from './screens/Home'
import Admin from './screens/Admin'  
import Restrito from './screens/Restrito'  
import Login from './screens/Login'
import CreateAccount from './screens/CreateAccount'
  

class App extends Component {

  render(){
    return (

      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path='/' component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/restrito' component={Restrito} />
            <Route path='/login' component={Login} />
            <Route path='/create-account' component={CreateAccount} />
          </Container>
        </Router>
      </Provider>
    )
  }
}

export default App
