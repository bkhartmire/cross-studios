import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth'

class DanceClass extends Component {
  handleClick(e, danceClassId) {
    e.preventDefault()
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
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }
  render() {
    const {danceClass} = this.props
    //only add instructor link to dance classes with a known instructor
    let instructor_name
    if (danceClass.instructor.name === "TBA") {
      instructor_name = danceClass.instructor.name
    } else {
      instructor_name = <Link to={{
        pathname: `/instructors/${danceClass.instructor.id}`,
        state: {
          instructor: danceClass.instructor
        }
      }}>{danceClass.instructor.name}</Link>
    }
    return(
      <div className="dance_class_listing">
        <h3>{instructor_name}: {danceClass.name}</h3>
        <h4>{danceClass.start_time}-{danceClass.end_time}</h4>
        <h4>{danceClass.studio.name}</h4>
        <button onClick={e => this.handleClick(e, danceClass.id)}>Add Class to Schedule</button>
        <br></br>
      </div>
    )
  }
}



export default DanceClass
