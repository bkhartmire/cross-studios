import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DayPilot, DayPilotCalendar } from 'daypilot-pro-react'
import { fetchDanceClasses, fetchCalendar } from '../actions/danceClassActions'

class Calendar extends Component {
  componentDidMount(){
    this.props.fetchDanceClasses()
    this.props.fetchCalendar()
  }
  componentDidUpdate(){

    this.setState((state, props) =>({
      events: state.events.push(props.calendar).flatten
    }))
    debugger
  }
  constructor(props) {
    super(props)
    this.state = {
      viewType: "Week",
      headerDateFormat: "dddd", //name of day (e.g. 'Monday')
      events: [],
    }
  }

  render() {

    var {...config} = this.state
    return (
      <div>
        <DayPilotCalendar
          {...config}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danceClasses: state.danceClasses.all,
    calendar: state.danceClasses.calendar
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDanceClasses,
  fetchCalendar
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
