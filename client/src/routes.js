import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import Home from './components/Home'



export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={Home}/>
    </Switch>
  </BrowserRouter>
);
