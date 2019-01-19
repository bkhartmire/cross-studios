import React, {Component} from 'react'
import Instructor from './Instructor'
import { Link } from 'react-router-dom'

class DanceClass extends Component {
  render() {
    const {danceClass} = this.props
    return(
      <div className="dance_class_listing">
        <h3><Link to={{
            pathname: `/instructors/${danceClass.instructor_id}`,
            state: {
              instructor: this.props.danceClass.instructor
            }
          }}>{danceClass.instructor.name}:</Link> {danceClass.name}</h3>
        <h4>{danceClass.day} {danceClass.time}</h4>
        <h4>{danceClass.studio.name}</h4>
        <br></br>
      </div>
    )
  }
}



export default DanceClass
