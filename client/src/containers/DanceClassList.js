import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchDanceClasses } from '../actions/danceClassActions'
import DanceClass from '../components/DanceClass'
import Auth from '../modules/Auth'

class DanceClassList extends Component {
  constructor() {
    super()
    this.state = {
      userDanceClasses: [],
    }
  }
  componentDidMount(){
    this.props.fetchDanceClasses()
    //refactor to action
    fetch('/api/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => res.json())
    .then(res => {
       this.setState({
          userDanceClasses: res.dance_classes,
        })
      }).catch(err => console.log(err))

  }
  render(){
    const {danceClasses} = this.props

    return(
      <div className="danceClassList">
        <h1>Dance Classes</h1>
        <h1>Monday</h1>
          {danceClasses.filter(danceClass => danceClass.day === 'MONDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={this.state}/>)}
        <h1>Tuesday</h1>
          {danceClasses.filter(danceClass => danceClass.day === 'TUESDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={this.state}/>)}
        <h1>Wednesday</h1>
          {danceClasses.filter(danceClass => danceClass.day === 'WEDNESDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={this.state}/>)}
        <h1>Thursday</h1>
          {danceClasses.filter(danceClass => danceClass.day === 'THURSDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={this.state}/>)}
        <h1>Friday</h1>
          {danceClasses.filter(danceClass => danceClass.day === 'FRIDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={this.state}/>)}
        <h1>Saturday</h1>
          {danceClasses.filter(danceClass => danceClass.day === 'SATURDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={this.state}/>)}
        <h1>Sunday</h1>
          {danceClasses.filter(danceClass => danceClass.day === 'SUNDAY').map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass} userDanceClasses={this.state}/>)}
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
