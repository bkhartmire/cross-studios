import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import DanceClassList from './containers/DanceClassList'
import Instructor from './components/Instructor'
import Login from './containers/Login'
import Signup from './containers/Signup'



export default (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path='/' render={ () =>  <Home/>}/>
      <Route path='/dance_classes' component={DanceClassList} />
      <Route path='/instructors/:id' component={Instructor}/>
      <Route path='/signup' component={ () => <Signup handleSignupSubmit={this.handleSignupSubmit}/> }/>
      <Route path='/login' component={ () => (this.state.auth) ? <Redirect to="/"/> : <Login/> }/>
      <Route path='/logout' component={ () => logout() }/>
    </React.Fragment>
  </BrowserRouter>
);
