import React, { Component } from 'react'
import Auth from '../modules/Auth'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      usersDanceClasses: null,
      danceClassesLoaded: false,
    }
  }

  componentDidMount() {
    fetch('/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
      }
    })
  }
  render(){
    return(
      <div className="userProfile">
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default Profile
