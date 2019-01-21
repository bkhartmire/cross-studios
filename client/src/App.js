import React, { Component } from 'react';
import './App.css';
//import routes from './routes'
import Auth from './modules/Auth'
//import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import DanceClassList from './containers/DanceClassList'
import Instructor from './components/Instructor'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Profile from './containers/Profile'

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleSignupSubmit(e, data) {
    e.preventDefault()
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        user: data,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => {
      console.log(err)
    })
  }

  handleLoginSubmit(e, data) {
    e.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' render={ () =>  (this.state.auth) ? <Home/> : <Redirect to='/login'/>}/>
          <Route path='/dance_classes' render ={ () => (this.state.auth) ? <DanceClassList/> :  <Redirect to='/login'/>}/>
          <Route path='/instructors/:id' render ={ () => (this.state.auth) ? <Instructor/> :  <Redirect to='/login'/>}/>
          <Route path='/signup' render={ () => (this.state.auth) ? < Redirect to="/"/> : <Signup handleSignupSubmit={this.handleSignupSubmit}/> }/>
          <Route path='/login' render={ () => (this.state.auth) ? < Redirect to="/"/> : <Login handleLoginSubmit={this.handleLoginSubmit}/> }/>
          <Route path='/profile' render{ () => (this.state.auth) ? <Profile/> : <Redirect to='/login'/>}/>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
