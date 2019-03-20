import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import { logoutUser } from '../actions/sessionActions'
import Home from './containers/Home'
import DanceClassList from './containers/DanceClassList'
import InstructorList from './containers/InstructorList'
import InstructorProfile from './containers/InstructorProfile'
import Login from './containers/Login'
import Signup from './containers/Signup'
import UserProfile from './containers/UserProfile'

//need to authenticate user somehow. deleted Auth module with authentication methods
class App extends Component {
  constructor() {
    super()
  //   this.state = {
  //     //auth: Auth.isUserAuthenticated(),
  //   }
   this.handleLogout = this.handleLogout.bind(this)
  }
  //
  // handleLogout(e, data) {
  //   e.preventDefault()
  //   fetch('/logout', {
  //     method: 'DELETE',
  //     headers: {
  //       //token: Auth.getToken(),
  //       //'Authorization': `Token ${Auth.getToken()}`,
  //     }
  //   }).then(res => {
  //     //Auth.deauthenticateUser()
  //     this.setState({
  //       auth: true
  //       //you can't set auth to true. change dummy code.
  //       //auth: Auth.isUserAuthenticated()
  //     })
  //   }).catch(err => console.log(err))
  // }

  handleLogout(e) {
    e.preventDefault()
    this.props.actions.logoutUser()
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
            <a href="#" onClick={this.handleLogout}>Logout</a>
          </div>
          <Route exact path='/' component={Home}/>
          <Route path='/dance_classes' component={DanceClassList} onEnter={requireAuth}/>
          <Route path='/instructors/:id' component={InstructorProfile} onEnter={requireAuth}/>
          <Route path='/all_instructors' component={InstructorList} onEnter={requireAuth}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={UserProfile}/>
        </div>

      </BrowserRouter>
    )

    function requireAuth(nextState, replace) {
      if (!sessionStorage.jwt) {
        replace({
          pathname: '/login',
          state: { nextPathname: nextState.location.pathname }
        })
      }
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  logoutUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(App))
// export default App;
