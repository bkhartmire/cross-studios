import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DanceClass from '../components/DanceClass'
import Instructor from '../components/Instructor'
import { deleteReview } from '../actions/reviewActions'
import { fetchUser, addToUserSchedule, removeFromUserSchedule, favoriteInstructor, unfavoriteInstructor } from '../actions/userActions'

class UserProfile extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render(){
    const {user} = this.props

    const nothingMessage = "Nothing scheduled for this day."

    return(
      <div className="userProfile">
        <div className="sidebar">
          <h4 className="float-left">Logged In as {user.firstname} {user.lastname}</h4>
          <div>
            <h1 className="float-left">Your Favorite Instructors:</h1><br></br>
            {(user.favorites && user.favorites.length > 0)? (user.favorites.map((fave) => <span className="float-left"><Instructor key={fave.instructor_id} instructor={fave.instructor} userFavorites={user.favorites} favoriteInstructor={this.props.favoriteInstructor} unfavoriteInstructor={this.props.unfavoriteInstructor}/></span>)) : (<span className="float-left"><h5>You don't have any favorite instructors.</h5></span>)}

          </div>
          <div className="float-left">
            <h1 className="userReviews float-left">Your Reviews:</h1><br></br>
            <ul className="userReviews">
              {(user.reviews && user.reviews.length > 0)? (user.reviews.map((review) =>
                <div key={review.id}>
                  <div className="userReview float-left">
                    <span className="float-left"><Instructor key={review.instructor_id} instructor={review.instructor} userFavorites={user.favorites} favoriteInstructor={this.props.favoriteInstructor} unfavoriteInstructor={this.props.unfavoriteInstructor}/> </span>
                    <br></br>
                    <span className="float-left">{review.text}  </span>

                    <button className="float-left" onClick={e => this.props.deleteReview(review.id, review.instructor.id)}>Delete Review</button>
                  </div>
                </div>
              )): <span className="float-left"><h5>You don't have any instructor reviews.</h5></span>}
            </ul>

          </div>

        </div>

        <div className="schedule">
          <h1>Your Schedule</h1>

          <h2>Monday</h2>
          {(user.dance_classes && (user.dance_classes.filter((danceClass) => danceClass.day === "MONDAY").length > 0))? user.dance_classes.filter((danceClass) => danceClass.day === "MONDAY").map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.dance_classes} addToUserSchedule={this.props.addToUserSchedule} removeFromUserSchedule={this.props.removeFromUserSchedule} />) : <h5>{nothingMessage}</h5>}
          <h2>Tuesday</h2>
          {(user.dance_classes && (user.dance_classes.filter((danceClass) => danceClass.day === "TUESDAY").length > 0))? user.dance_classes.filter((danceClass) => danceClass.day === "TUESDAY").map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.dance_classes} addToUserSchedule={this.props.addToUserSchedule} removeFromUserSchedule={this.props.removeFromUserSchedule} />) : <h5>{nothingMessage}</h5>}
          <h2>Wednesday</h2>
            {(user.dance_classes && (user.dance_classes.filter((danceClass) => danceClass.day === "WEDNESDAY").length > 0))? user.dance_classes.filter((danceClass) => danceClass.day === "WEDNESDAY").map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.dance_classes} addToUserSchedule={this.props.addToUserSchedule} removeFromUserSchedule={this.props.removeFromUserSchedule} />) : <h5>{nothingMessage}</h5>}
          <h2>Thursday</h2>
            {(user.dance_classes && (user.dance_classes.filter((danceClass) => danceClass.day === "THURSDAY").length > 0))? user.dance_classes.filter((danceClass) => danceClass.day === "THURSDAY").map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.dance_classes} addToUserSchedule={this.props.addToUserSchedule} removeFromUserSchedule={this.props.removeFromUserSchedule} />) : <h5>{nothingMessage}</h5>}
          <h2>Friday</h2>
            {(user.dance_classes && (user.dance_classes.filter((danceClass) => danceClass.day === "FRIDAY").length > 0))? user.dance_classes.filter((danceClass) => danceClass.day === "FRIDAY").map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.dance_classes} addToUserSchedule={this.props.addToUserSchedule} removeFromUserSchedule={this.props.removeFromUserSchedule} />) : <h5>{nothingMessage}</h5>}
          <h2>Saturday</h2>
            {(user.dance_classes && (user.dance_classes.filter((danceClass) => danceClass.day === "SATURDAY").length > 0))? user.dance_classes.filter((danceClass) => danceClass.day === "SATURDAY").map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.dance_classes} addToUserSchedule={this.props.addToUserSchedule} removeFromUserSchedule={this.props.removeFromUserSchedule} />) : <h5>{nothingMessage}</h5>}
          <h2>Sunday</h2>
            {(user.dance_classes && (user.dance_classes.filter((danceClass) => danceClass.day === "SUNDAY").length > 0))? user.dance_classes.filter((danceClass) => danceClass.day === "SUNDAY").map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.dance_classes} addToUserSchedule={this.props.addToUserSchedule} removeFromUserSchedule={this.props.removeFromUserSchedule} />) : <h5>{nothingMessage}</h5>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.current
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  deleteReview,
  addToUserSchedule,
  removeFromUserSchedule,
  favoriteInstructor,
  unfavoriteInstructor,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
