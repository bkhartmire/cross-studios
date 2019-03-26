import React, { Component } from 'react'
import { DayPilot, DayPilotCalendar } from 'daypilot-pro-react'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewType: "Week"
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

export default Calendar
