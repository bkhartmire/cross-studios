import Auth from '../modules/Auth'
import React from 'react'
import { Redirect } from 'react-router-dom'

export const handleLoginSubmit = (user, callback) => {fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(res => {
    Auth.authenticateToken(res.token)
     this.setState({
       auth: Auth.isUserAuthenticated(),
     })
    callback()
  }).catch(err => console.log(err))
}

export const handleSignupSubmit = (e, data) => {
  e.preventDefault()
  fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      user: data,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(res => {
    Auth.authenticateToken(res.token)
    this.setState({
      auth: Auth.isUserAuthenticated(),
    })

  }).catch(err => {
    console.log(err)
  })
}

export const handleLogout = (e, data) => {
  e.preventDefault()
  fetch('/logout', {
    method: 'DELETE',
    headers: {
      token: Auth.getToken(),
      'Authorization': `Token ${Auth.getToken()}`,
    }
  }).then(res => {
    Auth.deauthenticateUser()
    // this.setState({
    //   auth: Auth.isUserAuthenticated()
    // })
  }).catch(err => console.log(err))
}
