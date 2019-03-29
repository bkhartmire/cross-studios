import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DayPilot, DayPilotCalendar } from 'daypilot-pro-react'
import { fetchDanceClasses, fetchCalendar } from '../actions/danceClassActions'
import { Modal, Button } from 'react-bootstrap'

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
    debugger
    this.setState({showDetails: true})

    //this.Id.events.data
  }

  handleClose() {
    this.setState({ showDetails: false })
  }

  constructor(props) {

    super(props)
    this.state = {
      showDetails: false
    }
  }

  render() {
    const configurations = {  viewType: "Day",
      headerDateFormat: "dddd",
      onEventClicked: this.handleClick}

    var {...config} = configurations
    this.importSchedule(config)

    return (
      <div>
        <DayPilotCalendar
          {...config}
        />

        <Modal show={this.state.showDetails} onHide={this.handleClose}   aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

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
