import React, {Component} from 'react'
import Instructor from './Instructor'

class DanceClass extends Component {
  handleOnClick() {
    console.log("clicked me function")
  }
  render() {
    const {danceClass} = this.props
    return(
      <div className="dance_class_listing">
        <h3><a className="instructor_link" onClick={() => this.handleOnClick()}>{danceClass.instructor.name}:</a> {danceClass.name}</h3>
        <h4>{danceClass.day} {danceClass.time}</h4>
        <h4>{danceClass.studio.name}</h4>
        <br></br>
      </div>
    )
  }
}



export default DanceClass
