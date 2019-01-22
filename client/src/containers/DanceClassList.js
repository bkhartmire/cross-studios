import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchDanceClasses } from '../actions/danceClassActions'
import DanceClass from '../components/DanceClass'

class DanceClassList extends Component {
  componentDidMount(){
    this.props.fetchDanceClasses()
  }
  render(){
    const {danceClasses} = this.props

    return(
      <div className="danceClassList">
        <h1>Dance Classes</h1>
        <h3>Monday</h3>
          {danceClasses.filter(danceClass => danceClass.day === 'MONDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass}/>)}
        <h3>Tuesday</h3>
          {danceClasses.filter(danceClass => danceClass.day === 'TUESDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass}/>)}
        <h3>Wednesday</h3>
          {danceClasses.filter(danceClass => danceClass.day === 'WEDNESDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass}/>)}
        <h3>Thursday</h3>
          {danceClasses.filter(danceClass => danceClass.day === 'THURSDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass}/>)}
        <h3>Friday</h3>
          {danceClasses.filter(danceClass => danceClass.day === 'FRIDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass}/>)}
        <h3>Saturday</h3>
          {danceClasses.filter(danceClass => danceClass.day === 'SATURDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass}/>)}
        <h3>Sunday</h3>
          {danceClasses.filter(danceClass => danceClass.day === 'SUNDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danceClasses: state.danceClasses.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDanceClasses
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DanceClassList)
