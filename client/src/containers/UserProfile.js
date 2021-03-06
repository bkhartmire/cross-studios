import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
          <div className="block">
            <h1 className="userFavorites">Your Favorite Instructors:</h1>
            {(user.favorites && user.favorites.length > 0)? (user.favorites.map((fave) => <span key={fave.id} className="float-left"><Instructor key={fave.instructor_id} instructor={fave.instructor} userFavorites={user.favorites} favoriteInstructor={this.props.favoriteInstructor} unfavoriteInstructor={this.props.unfavoriteInstructor}/></span>)) : (<span className="float-left block"><h5>You don't have any favorite instructors.</h5></span>)}

          </div>
          <div className="userReviews block">

            <h1 className="userReviews">Your Reviews:</h1><br></br>

              {(user.reviews && user.reviews.length > 0)? (user.reviews.map((review) =>
                <div key={review.id}>
                  <div className="userReview">
                    <span className="userReview"><h3><Link to={`/instructors/${review.instructor.id}`}>{review.instructor.name}</Link>:</h3></span>
                    <br></br>
                    <span className="userReview">
                      <p className="userReview">{review.text}</p>
                    </span>
                    <br></br>
                    <button className="float-left" onClick={e => this.props.deleteReview(review.id, review.instructor.id)}>Delete Review</button>


                  </div>
                  <br></br>
                </div>
              )): <span className="float-left"><h5>You don't have any instructor reviews.</h5></span>}


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
