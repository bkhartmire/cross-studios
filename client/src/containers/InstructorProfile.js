import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchInstructor } from '../actions/instructorActions'
import { fetchUserDanceClasses } from '../actions/danceClassActions'
import { fetchUserFavorites } from '../actions/userActions'
import ScheduleButton from '../components/ScheduleButton'
import FavoriteHeart from '../components/FavoriteHeart'
import ReviewsContainer from './ReviewsContainer'

class InstructorProfile extends Component {
  componentDidMount() {
    const instructor_id = window.location.href.match(/\/\d+/)
    this.props.fetchInstructor(instructor_id)
    this.props.fetchUserDanceClasses()
    this.props.fetchUserFavorites()
  }

  render(){
    const {instructor, userDanceClasses, userFavorites} = this.props
    debugger

    let listDanceClasses
    if (instructor.dance_classes) {
      listDanceClasses = instructor.dance_classes.map(dance_class => {
        return(
          <span key={dance_class.id} >
            <h4>{dance_class.name}: {dance_class.day} {dance_class.start_time}-{dance_class.end_time} at {dance_class.studio.name}</h4>
            <ScheduleButton key={dance_class.id} danceClass={dance_class} userDanceClasses={userDanceClasses}/>
          </span>
        )
      })
    }


    return(
      <div className="instructorProfile">
        <h1>{instructor.name}</h1>
        <span>
           <FavoriteHeart key={instructor.id} instructor={instructor} userFavorites={userFavorites}/> {instructor.favorited_count} favorited
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
    instructor: state.instructors.instructor_data,
    userDanceClasses: state.danceClasses.userDanceClasses,
    userFavorites: state.user.favorites,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructor,
  fetchUserDanceClasses,
  fetchUserFavorites,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InstructorProfile)
