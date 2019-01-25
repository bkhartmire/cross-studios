import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Auth from '../modules/Auth'
import DanceClass from '../components/DanceClass'
import { fetchUser } from '../actions/userActions'

class Profile extends Component {

  componentDidMount() {
    this.props.fetchUser()
    debugger
  }

  componentDidUpdate() {
    debugger
  }
  render(){
    const { user } = this.props

    let mondayClasses
    let hasMondayClasses
    let tuesdayClasses
    let hasTuesdayClasses
    let wednesdayClasses
    let hasWednesdayClasses
    let thursdayClasses
    let hasThursdayClasses
    let fridayClasses
    let hasFridayClasses
    let saturdayClasses
    let hasSaturdayClasses
    let sundayClasses
    let hasSundayClasses

    if (user && user.danceClasses) {
      mondayClasses = user.danceClasses.filter(danceClass => danceClass.day === "MONDAY")
      hasMondayClasses = mondayClasses.length > 0
      tuesdayClasses = user.danceClasses.filter(danceClass => danceClass.day === "TUESDAY")
      hasTuesdayClasses = tuesdayClasses.length > 0
      wednesdayClasses = user.danceClasses.filter(danceClass => danceClass.day === "WEDNESDAY")
      hasWednesdayClasses = wednesdayClasses.length > 0
      thursdayClasses = user.danceClasses.filter(danceClass => danceClass.day === "THURSDAY")
      hasThursdayClasses = thursdayClasses.length > 0
      fridayClasses = user.danceClasses.filter(danceClass => danceClass.day === "FRIDAY")
      hasFridayClasses = fridayClasses.length > 0
      saturdayClasses = user.danceClasses.filter(danceClass => danceClass.day === "SATURDAY")
      hasSaturdayClasses = saturdayClasses.length > 0
      sundayClasses = user.danceClasses.filter(danceClass => danceClass.day === "SUNDAY")
      hasSundayClasses = sundayClasses.length > 0
    }

    const nothingMessage = "Nothing scheduled for this day."



    return(
      <div className="userProfile">
        <h4>Logged In as {user.firstname} {user.lastname}</h4>
        <div className="schedule">
        <h1>Your Schedule</h1>

        <h2>Monday</h2>
        {hasMondayClasses ? (
          mondayClasses.map((danceClass) =>
            <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.danceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Tuesday</h2>
        {hasTuesdayClasses? (
          tuesdayClasses.map((danceClass) =>
            <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.danceClasses}/>
        )
      ) : (<h5>{nothingMessage}</h5>)}

        <h2>Wednesday</h2>
          {hasWednesdayClasses? (
            wednesdayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.danceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Thursday</h2>
          {hasThursdayClasses? (
            thursdayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.danceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Friday</h2>
          {hasFridayClasses? (
            fridayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.danceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Saturday</h2>
          {hasSaturdayClasses? (
            saturdayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.danceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Sunday</h2>
          {hasSundayClasses? (
            sundayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.danceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
