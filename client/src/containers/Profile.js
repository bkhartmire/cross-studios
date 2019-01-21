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
      this.setState({
        userDanceClasses: res.user.dance_classes,
        danceClassesLoaded: true,
      })
    }).catch(err => console.log(err))
  }
  render(){
    return(
      <div className="userProfile">
        {(this.state.danceClassesLoaded) ? this.state.userDanceClasses.map(danceClass => {
          return <h3 key={danceClass.id}>{danceClass.name}</h3>
        }) : <h2>You don't have any dance classes scheduled yet.</h2>}
      </div>
    )
  }
}

export default Profile
