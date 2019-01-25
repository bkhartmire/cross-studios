import React, {Component} from 'react'
import { addToUserSchedule, removeFromUserSchedule } from '../actions/danceClassActions'

class Button extends Component {

  handleClick(e, id) {
    e.preventDefault();
    (e.target.innerHTML === 'Add Class to Schedule') ? (addToUserSchedule(id)) : (removeFromUserSchedule(id));
  }

  render() {
    const {danceClass, userDanceClasses} = this.props
    //this conditional determines whether the current user has already added this danceclass to their schedule and defines the add/delete button accordingly
    const userDanceClassMatch = userDanceClasses.some(userDanceClass => userDanceClass.id === danceClass.id)
    let button
    if (userDanceClassMatch) {
      button = <button onClick={e => this.handleClick(e, danceClass.id)} style={{backgroundColor: '#dd7a7a'}}>Remove from Schedule</button>
    } else {
      button = <button onClick={e => this.handleClick(e, danceClass.id)} >Add Class to Schedule</button>
    }

    return(
      <div className="button">
        {button}
      </div>
    )
  }
}

export default Button
