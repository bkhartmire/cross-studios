import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Auth from '../modules/Auth'
import { addToUserSchedule, removeFromUserSchedule } from '../actions/danceClassActions'
import { fetchInstructor } from '../actions/instructorActions'
import { InstructorLink } from '../containers/InstructorLink'

class DanceClass extends Component {

  handleAddToScheduleClick(e, id) {
    e.preventDefault();
    (e.target.innerHTML === 'Add Class to Schedule') ? (addToUserSchedule(e, id)) : (removeFromUserSchedule(e, id));
  }

  handleInstructorClick(e, id) {
    e.preventDefault()
    this.props.fetchInstructor(id)
    debugger
  }

  render() {
    //this conditional only adds instructor link to dance classes with a known instructor
    let instructor_name
    if (this.props.danceClass.instructor.name === "TBA") {
      instructor_name = this.props.danceClass.instructor.name
    } else {
      instructor_name = <a href="" onClick={e => this.handleInstructorClick(e, this.props.danceClass.instructor_id)}>{this.props.danceClass.instructor.name}</a>
    }
    //this conditional determines whether the current user has already added this danceclass to their schedule and defines the add/delete button accordingly
    const userDanceClassMatch = this.props.userDanceClasses.find(userDanceClass => userDanceClass.id === this.props.danceClass.id)
    let button
    if (userDanceClassMatch) {
      button = <button onClick={e => this.handleAddToScheduleClick(e, userDanceClassMatch.id)} style={{backgroundColor: 'gray'}}>Remove from Schedule</button>
    } else {
        button = <button onClick={e => this.handleAddToScheduleClick(e, this.props.danceClass.id)} >Add Class to Schedule</button>
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

// const mapStateToProps = state => {
//   return {
//     instructor: state.instructor.instructor_data
//   }
// }

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructor
}, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(DanceClass)
export default connect(null, mapDispatchToProps)(DanceClass)
