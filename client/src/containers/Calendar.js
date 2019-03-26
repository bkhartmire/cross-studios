import React, { Component } from 'react'
import { DayPilot, DayPilotCalendar } from 'daypilot-pro-react'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewType: "Week",
      headerDateFormat: "dddd" //name of day (e.g. 'Monday')
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
