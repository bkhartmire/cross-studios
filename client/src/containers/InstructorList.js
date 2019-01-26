import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchInstructors } from '../actions/instructorActions'
import { fetchUserFavorites } from '../actions/userActions'
import Instructor from '../components/Instructor'

class InstructorList extends Component {

  componentDidMount(){
    this.props.fetchInstructors()
    this.props.fetchUserFavorites()
  }

  render() {
    const {instructors, userFavorites} = this.props

    return(
      <div className="instructorList">
        <h1>Instructors</h1>
        {instructors.map(instructor => <Instructor key={instructor.id} instructor={instructor} userFavorites={this.props.userFavorites}/>)}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    instructors: state.instructors.all_instructors,
    userFavorites: state.user.favorites,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructors,
  fetchUserFavorites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InstructorList)
