import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchInstructor } from '../actions/instructorActions'

class Instructor extends Component {
  componentDidMount() {
    debugger
    this.props.fetchInstructor()
  }


  render(){
    const instructor = this.state
    const listDanceClasses = instructor.dance_classes.map(dance_class => {
      return(
        <span>
          <h4>{dance_class.name}: {dance_class.day} {dance_class.start_time}-{dance_class.end_time} at {dance_class.studio.name}</h4>
        </span>
      )
    })
    return(
      <div>
        <h1>{instructor.name}</h1>
        {listDanceClasses}
        <iframe width="560" height="315" src={instructor.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructor
}, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(DanceClass)
export default connect(null, mapDispatchToProps)(Instructor)
