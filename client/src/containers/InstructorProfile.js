import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchInstructor } from '../actions/instructorActions'
import { fetchUser, addToUserSchedule, removeFromUserSchedule } from '../actions/userActions'
import { fetchUserFavorites, favoriteInstructor, unfavoriteInstructor } from '../actions/userActions'
import ScheduleButton from '../components/ScheduleButton'
import FavoriteHeart from '../components/FavoriteHeart'
import ReviewsContainer from './ReviewsContainer'

class InstructorProfile extends Component {
  componentDidMount() {
    this.props.fetchUser()
    const instructor_id = window.location.href.match(/\/\d+/)
    this.props.fetchInstructor(instructor_id)

  }

  render(){
    const {instructor, user} = this.props

    let listDanceClasses
    if (instructor.dance_classes && user.dance_classes) {
      listDanceClasses = instructor.dance_classes.map(dance_class => {
        return(
          <span key={dance_class.id} >
            <h4>{dance_class.text}: {dance_class.day} {dance_class.start}-{dance_class.end} at {dance_class.studio.name}</h4>
            <ScheduleButton key={dance_class.id} danceClass={dance_class} userDanceClasses={user.dance_classes} addToUserSchedule={this.props.addToUserSchedule} removeFromUserSchedule={this.props.removeFromUserSchedule}/>
          </span>
        )
      })
    }


    return(
      <div className="instructorProfile">
        <h1>{instructor.name}</h1>
        <span>
           <FavoriteHeart key={instructor.id} instructor={instructor} userFavorites={user.favorites} favoriteInstructor={this.props.favoriteInstructor} unfavoriteInstructor={this.props.unfavoriteInstructor}/> {instructor.favorited_count} favorited
        </span>
        <br></br><br></br>

        {listDanceClasses}

        <br></br>
        <ReviewsContainer instructorId={instructor.id} reviews={instructor.reviews}/>

        <iframe width="560" height="315" src={instructor.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    instructor: state.instructors.instructorData,
    user: state.user.current,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructor,
  fetchUser,
  addToUserSchedule,
  removeFromUserSchedule,
  favoriteInstructor,
  unfavoriteInstructor,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InstructorProfile)
