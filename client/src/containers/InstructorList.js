import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchInstructors } from '../actions/danceClassActions'
import Instructor from '../components/Instructor'

class InstructorList extends Component {
  componentDidMount( {
    this.props.fetchInstructors()
  })

  render() {
    return(
      <h1>Hello</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    instructors: state.instructors.instructor_data
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructors
}, dispatch)
export default connect (mapStateToProps, mapDispatchToProps)(InstructorList)
