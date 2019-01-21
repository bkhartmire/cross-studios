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
      //console.log(res)
      this.setState({
        userDanceClasses: res.dance_classes,
        danceClassesLoaded: true,
      })
    }).catch(err => console.log(err))
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
