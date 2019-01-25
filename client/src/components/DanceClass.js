import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth'
import Button from './Button'
import { addToUserSchedule, removeFromUserSchedule } from '../actions/danceClassActions'


class DanceClass extends Component {
  handleClick(e, id) {
    e.preventDefault();
    (e.target.innerHTML === 'Add Class to Schedule') ? (addToUserSchedule(e, id)) : (removeFromUserSchedule(e, id));
  }

  render() {
    const {danceClass, userDanceClasses} = this.props
    //this conditional only adds instructor link to dance classes with a known instructor
    let instructor_name
    if (danceClass.instructor.name === "TBA") {
      instructor_name = danceClass.instructor.name
    } else {
      instructor_name = <Link to={`/instructors/${danceClass.instructor_id}`}>{danceClass.instructor.name}</Link>
    }
    //this conditional determines whether the current user has already added this danceclass to their schedule and defines the add/delete button accordingly
    const userDanceClassMatch = userDanceClasses.find(userDanceClass => userDanceClass.id === danceClass.id)
    let button
    if (userDanceClassMatch) {
      button = <button onClick={e => this.handleClick(e, userDanceClassMatch.id)} style={{backgroundColor: 'gray'}}>Remove from Schedule</button>
    } else {
        button = <button onClick={e => this.handleClick(e, danceClass.id)} >Add Class to Schedule</button>
    }

    return(
      <div className="dance_class_listing">
        <h3>{instructor_name}: {danceClass.name}</h3>
        <h4>{danceClass.start_time}-{danceClass.end_time}</h4>
        <h4>{danceClass.studio.name}</h4>
        <Button key={danceClass.id} userDanceClasses={userDanceClasses} danceClass={danceClass}/>
        <br></br>
      </div>
    )
  }
}

export default DanceClass
