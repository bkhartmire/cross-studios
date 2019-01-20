import React, {Component} from 'react'
//styling: reduce space between lines for each h5

class Studio extends Component {
  render() {
    const {studio} = this.props
    return(
      <div className="studio_listing">
        <h3>{studio.name}</h3>
        <h5>{studio.address.line_1}</h5>
        <h5>{studio.address.line_2}</h5>
        <br></br>
      </div>
    )
  }
}

export default Studio
