import React, {Component} from 'react'
import { addToUserSchedule, removeFromUserSchedule } from '../actions/danceClassActions'

class Button extends Component {
  // componentDidMount() {
  //   debugger
  // }
  handleClick(e, id) {
    e.preventDefault();
    (e.target.innerHTML === 'Add Class to Schedule') ? (addToUserSchedule(e, id)) : (removeFromUserSchedule(e, id));
  }

  render() {
    const {danceClass, userDanceClasses} = this.props
    //this conditional determines whether the current user has already added this danceclass to their schedule and defines the add/delete button accordingly
    const userDanceClassMatch = userDanceClasses.find(userDanceClass => userDanceClass.id === danceClass.id)
    let buttonMessage
    if (userDanceClassMatch) {
      buttonMessage = "Remove from Schedule"
    } else {
      buttonMessage = "Add Class to Schedule"
    }

    return(
      <div className="button">
        <button onClick={e => this.handleClick(e, danceClass.id)} >{buttonMessage}</button>
      </div>
    )
  }
}

export default Button
