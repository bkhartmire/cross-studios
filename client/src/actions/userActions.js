import Auth from '../modules/Auth'
import React from 'react'
import { Redirect } from 'react-router-dom'

export const loginUser = (user) => {
  return dispatch => {
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)

      dispatch({
        type: 'SET_USER',
        payload: Auth.isUserAuthenticated()
      })

      document.location.reload()
    }).catch(err => console.log(err))
  }
}

export const signupUser = (formData) => {
  return dispatch => {
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        user: formData,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)

      dispatch({
        type: 'SET_USER',
        payload: Auth.isUserAuthenticated()
      })
      document.location.reload()


    }).catch(err => console.log(err))
  }
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
