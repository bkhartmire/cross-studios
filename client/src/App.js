import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logoutUser } from './actions/sessionActions'
import Home from './containers/Home'
import DanceClassList from './containers/DanceClassList'
import InstructorList from './containers/InstructorList'
import InstructorProfile from './containers/InstructorProfile'
import Login from './containers/Login'
import Signup from './containers/Signup'
import UserProfile from './containers/UserProfile'


class App extends Component {
  constructor() {
    super()
   this.handleLogout = this.handleLogout.bind(this)
  }
  
  handleLogout(e) {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <div className="nav">
            <Link to='/'>Home</Link><span> | </span>
            <Link to='/dance_classes'>All Dance Classes</Link><span> | </span>
            <Link to='/all_instructors'>All Instructors</Link><span> | </span>
            <Link to='/profile'>Profile</Link><span> | </span>
            <a href="/" onClick={this.handleLogout}>Logout</a>
          </div>
          <Route exact path='/' render={ () => (!!sessionStorage.jwt) ? <Home/> : <Redirect to='/login'/>}/>
          <Route path='/dance_classes' render={ () => (!!sessionStorage.jwt) ? <DanceClassList/> : <Redirect to='/login'/>}/>
          <Route path='/instructors/:id' render={ () => (!!sessionStorage.jwt) ? <InstructorProfile/> : <Redirect to='/login'/>}/>
          <Route path='/all_instructors' render={ () => (!!sessionStorage.jwt) ? <InstructorList/> : <Redirect to='/login'/>}/>
          <Route path='/signup' render={ () => (!sessionStorage.jwt) ? <Signup/> : <Redirect to='/'/>}/>
          <Route path='/login' render={ () => (!sessionStorage.jwt) ? <Login/> : <Redirect to='/'/>}/>
          <Route path='/profile' render={ () => (!!sessionStorage.jwt) ? <UserProfile/> : <Redirect to='/login'/>}/>
        </div>

      </BrowserRouter>
    )

  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  logoutUser
}, dispatch)

export default connect(null, mapDispatchToProps)(App)
