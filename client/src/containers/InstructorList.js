import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchInstructors } from '../actions/instructorActions'
import Instructor from '../components/Instructor'

class InstructorList extends Component {

  componentDidMount(){
    debugger
    this.props.fetchInstructors()
  }

  render() {
    const {instructors} = this.props

    return(
      <div className="instructorList">
        <h1>Instructors</h1>
        {instructors.map(instructor => <Instructor key={instructor.id} instructor={instructor} />)}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    instructors: state.instructors.all_instructors
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructors
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InstructorList)
