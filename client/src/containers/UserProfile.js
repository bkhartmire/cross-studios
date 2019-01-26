import React, { Component } from 'react'
import Auth from '../modules/Auth'
import DanceClass from '../components/DanceClass'
import Instructor from '../components/Instructor'

class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      userDanceClasses: [],
      firstname: '',
      lastname: '',
      favorites: [],
      reviews: [],
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
          favorites: res.favorites,
          reviews: res.reviews,
        })
      }).catch(err => console.log(err))
  }
  render(){
    const user = this.state
    const mondayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "MONDAY")
    const hasMondayClasses = mondayClasses.length > 0
    const tuesdayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "TUESDAY")
    const hasTuesdayClasses = tuesdayClasses.length > 0
    const wednesdayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "WEDNESDAY")
    const hasWednesdayClasses = wednesdayClasses.length > 0
    const thursdayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "THURSDAY")
    const hasThursdayClasses = thursdayClasses.length > 0
    const fridayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "FRIDAY")
    const hasFridayClasses = fridayClasses.length > 0
    const saturdayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "SATURDAY")
    const hasSaturdayClasses = saturdayClasses.length > 0
    const sundayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "SUNDAY")
    const hasSundayClasses = sundayClasses.length > 0
    const nothingMessage = "Nothing scheduled for this day."



    return(
      <div className="userProfile">
        <div className="sidebar">
          <h4>Logged In as {user.firstname} {user.lastname}</h4>
          <h1>Your Favorite Instructors:</h1>
          {user.favorites.map((fave) => <Instructor key={fave.instructor_id} instructor={fave.instructor} userFavorites={user.favorites}/>)}
        </div>

        <div className="schedule">
        <h1>Your Schedule</h1>

        <h2>Monday</h2>
        {hasMondayClasses ? (
          mondayClasses.map((danceClass) =>
            <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Tuesday</h2>
        {hasTuesdayClasses? (
          tuesdayClasses.map((danceClass) =>
            <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
        )
      ) : (<h5>{nothingMessage}</h5>)}

        <h2>Wednesday</h2>
          {hasWednesdayClasses? (
            wednesdayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Thursday</h2>
          {hasThursdayClasses? (
            thursdayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Friday</h2>
          {hasFridayClasses? (
            fridayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Saturday</h2>
          {hasSaturdayClasses? (
            saturdayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Sunday</h2>
          {hasSundayClasses? (
            sundayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        </div>
      </div>
    )
  }
}

export default UserProfile
