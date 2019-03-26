import React, { Component } from 'react'
import { DayPilot, DayPilotCalendar } from 'daypilot-pro-react'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewType: "Week",
      headerDateFormat: "dddd", //name of day (e.g. 'Monday')
      events: [
    {
      id: 1,
      text: "Event 1",
      start: "2019-03-26T10:30:00",
      end: "2019-03-26T13:00:00"
    },
    {
      id: 2,
      text: "Event 2",
      start: "2019-03-26T12:00:00",
      end: "2019-03-26T14:00:00",
      backColor: "#38761d"
    }
  ]
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
