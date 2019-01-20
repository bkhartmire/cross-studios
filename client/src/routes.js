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
      <Route exact path='/' render={ () =>  loggedIn() ? <Home/> : <Redirect to="/login"/> }/>
      <Route path='/dance_classes' component={DanceClassList} />
      <Route path='/instructors/:id' component={Instructor}/>
      <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup/> }/>
      <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login/> }/>
      <Route path='/logout' component={ () => logout() }/>
    </React.Fragment>
  </BrowserRouter>
);

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/login"/>
}
