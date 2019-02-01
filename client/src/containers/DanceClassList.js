import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchDanceClasses, fetchUserDanceClasses, addToUserSchedule, removeFromUserSchedule  } from '../actions/danceClassActions'
import DanceClass from '../components/DanceClass'

class DanceClassList extends Component {

  componentDidMount(){
    this.props.fetchDanceClasses()
    this.props.fetchUserDanceClasses()
  }

  render(){
    const {danceClasses, userDanceClasses} = this.props

    return(
      <div className="danceClassList">
        <h1>Dance Classes</h1>
        <div className="column">
          <h2 className="day">Monday</h2>
            {danceClasses.filter(danceClass => danceClass.day === 'MONDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h2 className="day">Tuesday</h2>
            {danceClasses.filter(danceClass => danceClass.day === 'TUESDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h2 className="day">Wednesday</h2>
            {danceClasses.filter(danceClass => danceClass.day === 'WEDNESDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h2 className="day">Thursday</h2>
            {danceClasses.filter(danceClass => danceClass.day === 'THURSDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h2 className="day">Friday</h2>
            {danceClasses.filter(danceClass => danceClass.day === 'FRIDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h2 className="day">Saturday</h2>
            {danceClasses.filter(danceClass => danceClass.day === 'SATURDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h2 className="day">Sunday</h2>
            {danceClasses.filter(danceClass => danceClass.day === 'SUNDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses} addToUserSchedule={this.props.addToUserSchedule}, removeFromUserSchedule={this.props.removeFromUserSchedule}/>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danceClasses: state.danceClasses.all,
    userDanceClasses: state.danceClasses.userDanceClasses
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDanceClasses,
  fetchUserDanceClasses,
  addToUserSchedule,
  removeFromUserSchedule
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DanceClassList)
