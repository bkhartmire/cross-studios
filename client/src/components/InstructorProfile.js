import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchInstructor, favoriteInstructor } from '../actions/instructorActions'
import { fetchUserDanceClasses } from '../actions/danceClassActions'
import { fetchUserFavorites } from '../actions/userActions'
import Button from './Button'

class InstructorProfile extends Component {
  componentDidMount() {
    const instructor_id = window.location.href.match(/\/\d+/)
    this.props.fetchInstructor(instructor_id)
    this.props.fetchUserDanceClasses()
    this.props.fetchUserFavorites()
  }

  componentDidUpdate() {
    debugger
  }

  //eventually going to have to do something like the danceClass button feature that determines whether an instructor is favorited by the current user. This handleClick should fetch a post request to create a new Favorite with current user id and instructor id.
  handleFavorite(e, instructorId) {
    e.preventDefault()
    debugger
    this.props.favoriteInstructor(instructorId)
    e.target.style.color = 'red'

  }

  handleUnfavorite(e, instructor_id) {
    e.preventDefault()
    //unfavorite instructor action
    debugger
  }


  render(){
    const {instructor, userDanceClasses, userFavorites} = this.props

    let listDanceClasses
    if (instructor.dance_classes) {
      listDanceClasses = instructor.dance_classes.map(dance_class => {
        return(
          <span>
            <h4>{dance_class.name}: {dance_class.day} {dance_class.start_time}-{dance_class.end_time} at {dance_class.studio.name}</h4>
            <Button key={dance_class.id} danceClass={dance_class} userDanceClasses={userDanceClasses}/>
          </span>
        )
      })
    }

    //userFavoritesMatch determines if this instructor is one of the current user's favorites
    const userFavoritesMatch = userFavorites.find(favorite => favorite.instructor_id === instructor.id)
    let heart
    if (!!userFavoritesMatch) {
      heart = <a className="heart" onClick={e => this.handleUnfavorite(e, instructor.id)} style={{color: 'red'}}>&hearts;</a>
    } else {
      heart = <a className="heart" onClick={e => this.handleFavorite(e, instructor.id)} style={{color: '#c2c4c6'}}>&hearts;</a>
    }



    return(
      <div className="instructorProfile">
        <h1>{instructor.name}</h1>
        <span>
           {heart} {instructor.favorited_count} favorited
        </span>
        <br></br><br></br>

        {listDanceClasses}

        <br></br>

        <iframe width="560" height="315" src={instructor.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    instructor: state.instructors.instructor_data,
    userDanceClasses: state.danceClasses.userDanceClasses,
    userFavorites: state.user.favorites
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructor,
  fetchUserDanceClasses,
  favoriteInstructor,
  fetchUserFavorites,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InstructorProfile)
