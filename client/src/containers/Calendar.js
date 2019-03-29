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
    this.handleClose = this.handleClose.bind(this)
  }

  importSchedule(config) {
    if (this.props.calendar.length > 0) {
      config.events = this.props.calendar
    }
  }

  handleClick(args) {
    // DayPilot.Modal.alert(`You Clicked ${args.e.data.text}` +
    //   "\n"  + 'new line')
    debugger
    //new DayPilot.Modal().showHtml('<h1>Hi</h1>');
    this.setState({showDetails: true})
    //update state with details of danceClass??
  }

  handleClose() {
    this.setState({ show: false })
  }

  constructor(props) {
    super(props)
    this.state = {
      calendar:{
        viewType: "Day",
        headerDateFormat: "dddd",
        onEventClicked: this.handleClick //name of day (e.g. 'Monday')
      },
      showDetails: false,
    }
  }

  render() {

    var {...config} = this.state.calendar
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
