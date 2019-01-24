import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchInstructor } from '../actions/instructorActions'

class InstructorLink extends Component {

}

// const mapStateToProps = state => {
//   return {
//     instructor: state.instructor.instructor_data
//   }
// }

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructor
}, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(DanceClass)
export default connect(null, mapDispatchToProps)(DanceClass)
