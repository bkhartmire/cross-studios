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
  constructor(props) {
    super(props)
    this.state = {
      viewType: "Week",
      headerDateFormat: "dddd", //name of day (e.g. 'Monday')
      events: [
    {
      id: 1,
      text: "Event 1",
      start: "2019-02-26T10:30:00",
      end: "2019-02-26T13:00:00"
    },
    {
      id: 2,
      text: "Event 2",
      start: "2019-02-26T12:00:00",
      end: "2019-02-26T14:00:00",
      backColor: "#38761d"
    }
  ]
    }
  }
  render() {
    debugger
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
    danceClasses: state.danceClasses.all
    calendar: state.danceClasses.calendar
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDanceClasses,
  fetchCalendar
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
