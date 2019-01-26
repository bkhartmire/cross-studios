import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchDanceClasses, fetchUserDanceClasses } from '../actions/danceClassActions'
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
          <h1>Monday</h1>
            {danceClasses.filter(danceClass => danceClass.day === 'MONDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h1>Tuesday</h1>
            {danceClasses.filter(danceClass => danceClass.day === 'TUESDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h1>Wednesday</h1>
            {danceClasses.filter(danceClass => danceClass.day === 'WEDNESDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h1>Thursday</h1>
            {danceClasses.filter(danceClass => danceClass.day === 'THURSDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h1>Friday</h1>
            {danceClasses.filter(danceClass => danceClass.day === 'FRIDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h1>Saturday</h1>
            {danceClasses.filter(danceClass => danceClass.day === 'SATURDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
        </div>
        <div className="column">
          <h1>Sunday</h1>
            {danceClasses.filter(danceClass => danceClass.day === 'SUNDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={userDanceClasses}/>)}
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
  fetchUserDanceClasses
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DanceClassList)
