import React, { Component } from 'react'
import Auth from '../modules/Auth'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      userDanceClasses: [],
      firstname: '',
      lastname: '',
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
          userDanceClasses: res.dance_classes,
          firstname: res.firstname,
          lastname: res.lastname,
        })
      debugger}).catch(err => console.log(err))
  }
  render(){
    const user = this.state
    return(
      <div className="userProfile">
      <h4>Logged In as {user.firstname} {user.lastname}</h4>
        {(user.userDanceClasses.length > 0) ? this.state.userDanceClasses.map(danceClass => {
          return (
            <div>
              <h3 key={danceClass.id}>{danceClass.instructor.name}: {danceClass.name}</h3>
              <h4>{danceClass.day} {danceClass.time}</h4>
              <h4>{danceClass.studio.name}</h4>
            </div>
          )
        }) : <h2>You don't have any dance classes scheduled yet.</h2>}
      </div>
    )
  }
}

export default Profile
