import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

const Home = () => {
  return(
    <div>
      <h1>HOME!</h1>
    </div>
  )
}

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={Home}/>
    </Switch>
  </BrowserRouter>
);
