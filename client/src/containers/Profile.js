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
    const mondayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "MONDAY")
    const hasMondayClasses = mondayClasses.length > 0
    const tuesdayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "TUESDAY")
    const hasTuesdayClasses = tuesdayClass.length > 0
    const nothingMessage = "Nothing scheduled for this day."



    return(
      <div className="userProfile">
        <h4>Logged In as {user.firstname} {user.lastname}</h4>
        <div className="schedule">
        <h1>Your Schedule</h1>
        <h2>Monday</h2>
        {hasMondayClasses ? (
          mondayClasses.map((danceClass) =>
            <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h1>{nothingMessage}</h1>)}
        <h2>Tuesday</h2>
        {hasTuesdayClasses? (
          tuesdayClasses.map((danceClass) =>
            <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
        )
      ) : (<h1>{nothingMessage}</h1>)}
        <h2>Wednesday</h2>

        <h2>Thursday</h2>

        <h2>Friday</h2>

        <h2>Saturday</h2>

        <h2>Sunday</h2>
        
        </div>
      </div>
    )
  }
}

export default Profile
