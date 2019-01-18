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
      <div>
        <h1>This is the Dance Class List</h1>
        {danceClasses.map((danceClass) => <DanceClass key={danceClass.id} danceClass={danceClass}/>)}
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
