import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth'
import { addToUserSchedule } from '../actions/danceClassActions'

class DanceClass extends Component {
  //separate into reducer
  handleClick(e, danceClassId) {
    e.preventDefault()
    if (e.target.innerHTML === 'Add Class to Schedule') {
      const data = {dance_class_id: danceClassId}
      fetch('/api/user_dance_classes', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          token: Auth.getToken(),
          'Authorization': `Token ${Auth.getToken()}`,
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
      .then(alert("Class added to your schedule."))
      .catch(error => console.error('Error:', error))
      e.target.style.backgroundColor = 'gray'
      e.target.innerHTML = "Remove from Schedule"
    } else {
      //put delete request here
      alert('Class removed from your schedule.')
      e.target.style.backgroundColor = ''
      e.target.innerHTML = "Add Class to Schedule"
    }

  }

  render() {
    //this conditional only adds instructor link to dance classes with a known instructor
    let instructor_name
    if (this.props.danceClass.instructor.name === "TBA") {
      instructor_name = this.props.danceClass.instructor.name
    } else {
      instructor_name = <Link to={{
        pathname: `/instructors/${this.props.danceClass.instructor.id}`,
        state: {
          instructor: this.props.danceClass.instructor
        }
      }}>{this.props.danceClass.instructor.name}</Link>
    }
    //this conditional determines whether the current user has already added this danceclass to their schedule and defines the add/delete button accordingly
    let button
    if (this.props.userDanceClasses.some(userDanceClass => userDanceClass.id === this.props.danceClass.id)) {
      button = <button onClick={e => this.handleClick(e, this.props.danceClass.id)} style={{backgroundColor: 'gray'}}>Remove from Schedule</button>
    } else {
        button = <button onClick={e => this.handleClick(e, this.props.danceClass.id)} >Add Class to Schedule</button>
    }

    return(
      <div className="dance_class_listing">
        <h3>{instructor_name}: {this.props.danceClass.name}</h3>
        <h4>{this.props.danceClass.start_time}-{this.props.danceClass.end_time}</h4>
        <h4>{this.props.danceClass.studio.name}</h4>
        {button}
        <br></br>
      </div>
    )
  }
}



export default DanceClass
