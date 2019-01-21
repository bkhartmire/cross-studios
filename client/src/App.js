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

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
  }

  handleSignupSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' render={ () =>  <Home/>}/>
          <Route path='/dance_classes' component={DanceClassList} />
          <Route path='/instructors/:id' component={Instructor}/>
          <Route path='/signup' component={ () => <Signup handleSignupSubmit={this.handleSignupSubmit}/> }/>
          <Route path='/login' component={ () => (this.state.auth) ? <Redirect to="/"/> : <Login/> }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
