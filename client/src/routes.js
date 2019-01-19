import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import DanceClassList from './containers/DanceClassList'
import Instructor from './components/Instructor'



export default (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path='/' render={Home}/>
      <Route path='/dance_classes' component={DanceClassList} />
      <Route path='/instructors/:id' component={Instructor}/>
    </React.Fragment>
  </BrowserRouter>
);
