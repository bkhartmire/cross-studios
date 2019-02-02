import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchInstructors } from '../actions/instructorActions'
import { fetchUser, favoriteInstructor, unfavoriteInstructor } from '../actions/userActions'
import Instructor from '../components/Instructor'

class InstructorList extends Component {

  componentDidMount(){
    this.props.fetchInstructors()
    this.props.fetchUser()
  }

  render() {
    const {instructors, user} = this.props

    return(
      <div className="instructorList">
        <h1>Instructors</h1>
        {instructors.map(instructor => <Instructor key={instructor.id} instructor={instructor} userFavorites={user.favorites} favoriteInstructor={this.props.favoriteInstructor} unfavoriteInstructor={this.props.unfavoriteInstructor}/>)}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    instructors: state.instructors.all_instructors,
    user: state.user.current,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructors,
  fetchUser,
  favoriteInstructor,
  unfavoriteInstructor
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InstructorList)
