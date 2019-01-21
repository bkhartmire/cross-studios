import React, { Component } from 'react'
import Auth from '../modules/Auth'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      userDanceClasses: null,
      danceClassesLoaded: false,
    }
  }

  componentDidMount() {
    fetch('/api/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => res.json())
    .then(res => {
      console.log(res)
      //right now res user object does not include an array of dance classes
      // fix that
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
