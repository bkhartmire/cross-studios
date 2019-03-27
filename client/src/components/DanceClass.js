import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ScheduleButton from './ScheduleButton'


class DanceClass extends Component {

  render() {
    const {danceClass, userDanceClasses, addToUserSchedule, removeFromUserSchedule} = this.props
    //this conditional only adds instructor link to dance classes with a known instructor
    let instructor_name
    if (danceClass.instructor.name === "TBA") {
      instructor_name = danceClass.instructor.name
    } else {
      instructor_name = <Link to={`/instructors/${danceClass.instructor_id}`}>{danceClass.instructor.name}</Link>
    }

    return(
      <div className="dance_class_listing">
        <h3>{instructor_name}: {danceClass.text}</h3>
        <h4>{danceClass.start_time}-{danceClass.end_time}</h4>
        <h4>{danceClass.studio.name}</h4>
        <ScheduleButton key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses} addToUserSchedule={addToUserSchedule} removeFromUserSchedule={removeFromUserSchedule}/>
        <br></br>
      </div>
    )
  }
}

export default DanceClass
