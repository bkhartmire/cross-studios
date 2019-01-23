import React, { Component } from 'react';
import './App.css';
//import routes from './routes'
import Auth from './modules/Auth'
//import React from 'react'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { handleLogout } from './actions/userActions'
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
    // this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    // this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    //this.handleLogout = this.handleLogout.bind(this)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="nav">
            <Link to='/login'>Login</Link><span> | </span>
            <Link to='/signup'>Signup</Link><span> | </span>
            <Link to='/'>Home</Link><span> | </span>
            <Link to='/dance_classes'>All Dance Classes</Link><span> | </span>
            <Link to='/profile'>Profile</Link><span> | </span>
            <a href="#" onClick={e => {handleLogout(e, this.state)}}>Logout</a>
          </div>
          <Route exact path='/' render={ () =>  (this.state.auth) ? <Home/> : <Redirect to='/login'/>}/>
          <Route path='/dance_classes' render ={ () => (this.state.auth) ? <DanceClassList/> :  <Redirect to='/login'/>}/>
          <Route path='/instructors/:id' render={ () => (this.state.auth) ? <Instructor/> :  <Redirect to='/login'/>}/>
          <Route path='/signup' render={ () => (this.state.auth) ? < Redirect to="/"/> : <Signup/> }/>
          <Route path='/login' render={ () => (this.state.auth) ? < Redirect to="/"/> : <Login/> }/>
          <Route path='/profile' render={ () => (this.state.auth) ? <Profile/> : <Redirect to='/login'/>}/>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
