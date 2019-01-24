// import React, {Component} from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { fetchInstructor } from '../actions/instructorActions'
// import { instructor } from '../components/Instructor'
//
// class InstructorLink extends Component {
//   componentDidMount() {
//     this.props.fetchInstructor(instructor_id)
//   }
//   render() {
//     const {instructor} = this.props
//     return(
//       < Instructor instructor={instructor} />
//     )
//   }
// }
//
// // const mapStateToProps = state => {
// //   return {
// //     instructor: state.instructor.instructor_data
// //   }
// // }
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchInstructor
// }, dispatch)
//
// // export default connect(mapStateToProps, mapDispatchToProps)(DanceClass)
// export default connect(null, mapDispatchToProps)(DanceClass)
