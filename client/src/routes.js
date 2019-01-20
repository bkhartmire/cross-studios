import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import DanceClassList from './containers/DanceClassList'
import Instructor from './components/Instructor'
import Login from './containers/Login'
import Signup from './containers/Signup'



export default (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path='/' render={Home}/>
      <Route path='/dance_classes' component={DanceClassList} />
      <Route path='/instructors/:id' component={Instructor}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
    </React.Fragment>
  </BrowserRouter>
);
