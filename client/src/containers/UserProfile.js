import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import Auth from '../modules/Auth'
import DanceClass from '../components/DanceClass'
import Instructor from '../components/Instructor'
import { fetchUser } from '../actions/userActions'
import { deleteReview } from '../actions/reviewActions'

class UserProfile extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  handleDeleteClick(e, review.id, review.instructor.id) {
    
  }

  render(){
    const {user} = this.props

    let mondayClasses
    let hasMondayClasses
    let tuesdayClasses
    let hasTuesdayClasses
    let wednesdayClasses
    let hasWednesdayClasses
    let thursdayClasses
    let hasThursdayClasses
    let fridayClasses
    let hasFridayClasses
    let saturdayClasses
    let hasSaturdayClasses
    let sundayClasses
    let hasSundayClasses
    const nothingMessage = "Nothing scheduled for this day."

    let userFavorites
    let hasUserFavorites = false
    if (user.favorites && user.favorites.length > 0) {
      userFavorites = user.favorites
      hasUserFavorites = true
    }

    let userReviews
    let hasUserReviews = false
    if (user.reviews && user.reviews.length > 0) {
      userReviews = user.reviews
      hasUserReviews = true
    }

    if (user.userDanceClasses) {
      const mondayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "MONDAY")
      const hasMondayClasses = mondayClasses.length > 0
      const tuesdayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "TUESDAY")
      const hasTuesdayClasses = tuesdayClasses.length > 0
      const wednesdayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "WEDNESDAY")
      const hasWednesdayClasses = wednesdayClasses.length > 0
      const thursdayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "THURSDAY")
      const hasThursdayClasses = thursdayClasses.length > 0
      const fridayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "FRIDAY")
      const hasFridayClasses = fridayClasses.length > 0
      const saturdayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "SATURDAY")
      const hasSaturdayClasses = saturdayClasses.length > 0
      const sundayClasses = user.userDanceClasses.filter(danceClass => danceClass.day === "SUNDAY")
      const hasSundayClasses = sundayClasses.length > 0

    }



    return(
      <div className="userProfile">
        <div className="sidebar">
          <h4 className="float-left">Logged In as {user.firstname} {user.lastname}</h4>
          <div>
            <h1 className="float-left">Your Favorite Instructors:</h1><br></br>
            {hasUserFavorites ? (userFavorites.map((fave) => <span className="float-left"><Instructor key={fave.instructor_id} instructor={fave.instructor} userFavorites={user.favorites}/></span>)) : (<span className="float-left"><h5>You haven't favorited any instructors yet.</h5></span>)}

          </div>
          <div className="float-left">
            <h1 className="userReviews float-left">Your Reviews:</h1><br></br>
            <ul className="userReviews">
              {hasUserReviews? (user.reviews.map((review) =>
                <div key={review.id}>
                  <li className="userReview float-left">
                    <h3>{review.instructor.name}: {review.text}</h3>
                    <button onClick={e => this.handleDeleteClick(e, review.id, review.instructor.id)}>Delete Review</button>
                  </li>
                </div>
              )): <span className="float-left"><h5>You haven't reviewed any instructors yet.</h5></span>}
            </ul>

          </div>

        </div>

        <div className="schedule">
        <h1>Your Schedule</h1>

        <h2>Monday</h2>
        {hasMondayClasses ? (
          mondayClasses.map((danceClass) =>
            <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Tuesday</h2>
        {hasTuesdayClasses? (
          tuesdayClasses.map((danceClass) =>
            <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
        )
      ) : (<h5>{nothingMessage}</h5>)}

        <h2>Wednesday</h2>
          {hasWednesdayClasses? (
            wednesdayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Thursday</h2>
          {hasThursdayClasses? (
            thursdayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Friday</h2>
          {hasFridayClasses? (
            fridayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Saturday</h2>
          {hasSaturdayClasses? (
            saturdayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        <h2>Sunday</h2>
          {hasSundayClasses? (
            sundayClasses.map((danceClass) =>
              <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={user.userDanceClasses}/>
          )
        ) : (<h5>{nothingMessage}</h5>)}

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
