import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth'

class DanceClass extends Component {
  handleClick(e, danceClassId) {
    e.preventDefault()
    fetch('/api/user_dance_classes', {
      method: 'POST',
      body: JSON.stringify({
        dance_class_id: danceClassId
      }),
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => console.log(res))
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
