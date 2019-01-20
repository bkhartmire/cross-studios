import React, {Component} from 'react'
import Instructor from './Instructor'
import { Link } from 'react-router-dom'

class DanceClass extends Component {
  render() {
    const {danceClass} = this.props
    //only add instructor link to dance classes with a known instructor
    let instructor_name
    if (danceClass.instructor.name == "TBA") {
      instructor_name = danceClass.instructor.name
    } else {
      instructor_name = <Link to={{
        pathname: `/instructors/${danceClass.instructor_id}`,
        state: {
          instructor: danceClass.instructor
        }
      }}>{danceClass.instructor.name}</Link>
    }
    return(
      <div className="dance_class_listing">
        <h3>{instructor_name}: {danceClass.name}</h3>
        <h4>{danceClass.day} {danceClass.time}</h4>
        <h4>{danceClass.studio.name}</h4>
        <br></br>
      </div>
    )
  }
}



export default DanceClass
