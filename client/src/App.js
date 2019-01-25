import React, { Component } from 'react';
import './App.css';
import Auth from './modules/Auth'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { handleLogout } from './actions/userActions'
import Home from './components/Home'
import DanceClassList from './containers/DanceClassList'
import InstructorList from './containers/InstructorList'
import InstructorProfile from './containers/InstructorProfile'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Profile from './containers/Profile'

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e, data) {
    e.preventDefault()
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => {
      Auth.deauthenticateUser()
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
    }).catch(err => console.log(err))
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
            <Link to='/all_instructors'>All Instructors</Link><span> | </span>
            <Link to='/profile'>Profile</Link><span> | </span>
            <a href="#" onClick={this.handleLogout}>Logout</a>
          </div>
          <Route exact path='/' render={ () =>  (this.state.auth) ? <Home/> : <Redirect to='/login'/>}/>
          <Route path='/dance_classes' render ={ () => (this.state.auth) ? <DanceClassList/> :  <Redirect to='/login'/>}/>
          <Route path='/instructors/:id' render={ () => (this.state.auth) ? <InstructorProfile/> :  <Redirect to='/login'/>}/>
          <Route path='/all_instructors' render ={ () => (this.state.auth) ? <InstructorList/> :  <Redirect to='/login'/>}/>
          <Route path='/signup' render={ () => (this.state.auth) ? < Redirect to="/"/> : <Signup/> }/>
          <Route path='/login' render={ () => (this.state.auth) ? < Redirect to="/"/> : <Login/> }/>
          <Route path='/profile' render={ () => (this.state.auth) ? <Profile/> : <Redirect to='/login'/>}/>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
