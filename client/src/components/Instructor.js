import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchInstructor } from '../actions/instructorActions'

class Instructor extends Component {
  componentDidMount() {
    const instructor_id = window.location.href.match(/\/\d+/)
    this.props.fetchInstructor(instructor_id)
  }


  render(){
    const {instructor} = this.props
    // const listDanceClasses = instructor.dance_classes.map(dance_class => {
    //   return(
    //     <span>
    //       <h4>{dance_class.name}: {dance_class.day} {dance_class.start_time}-{dance_class.end_time} at {dance_class.studio.name}</h4>
    //     </span>
    //  )
    //})
    return(
      <div className="instructorPage">
        <h1>{instructor.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    instructor: state.instructor.instructor_data
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructor
}, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(DanceClass)
export default connect(mapStateToProps, mapDispatchToProps)(Instructor)
