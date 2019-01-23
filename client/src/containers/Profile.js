import React, { Component } from 'react'
import Auth from '../modules/Auth'
import DanceClass from '../components/DanceClass'

//Is this a container or a component??
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
      }).catch(err => console.log(err))
  }
  render(){
    const user = this.state
    const hasDanceClasses = user.userDanceClasses.length > 0

    return(
      <div className="userProfile">
        <h4>Logged In as {user.firstname} {user.lastname}</h4>

          {hasDanceClasses? (
            <div className="schedule">
            <h1>Your Schedule</h1>
            <h2>Monday</h2>
            {user.userDanceClasses.filter(danceClass => danceClass.day === "MONDAY").map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
            )}
            </div>
          ) : (
            <h1>You don't have any dance classes scheduled yet.</h1>
          )}


      </div>
    )
  }
}

export default Profile
