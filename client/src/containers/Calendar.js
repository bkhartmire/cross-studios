import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DayPilot, DayPilotCalendar } from 'daypilot-pro-react'
import { fetchDanceClasses, fetchCalendar } from '../actions/danceClassActions'

//diaable dragging events and create pop up module with event details

class Calendar extends Component {
  componentDidMount(){
    //this.props.fetchDanceClasses()
    this.props.fetchCalendar()
    this.importSchedule = this.importSchedule.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  importSchedule(config) {
    if (this.props.calendar.length > 0) {
      config.events = this.props.calendar
    }

  }

  handleClick(args) {
    debugger
    console.log(`You Clicked ${args.e.data.text}`)
  }

  constructor(props) {
    super(props)
    this.state = {
      viewType: "Day",
      headerDateFormat: "dddd",
      onEventClicked: this.handleClick //name of day (e.g. 'Monday')
    }
  }

  render() {

    var {...config} = this.state
    this.importSchedule(config)

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
    calendar: state.danceClasses.calendar,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDanceClasses,
  fetchCalendar,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
