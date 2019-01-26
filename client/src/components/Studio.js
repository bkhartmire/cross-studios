import React, {Component} from 'react'

class Studio extends Component {
  render() {
    const {studio} = this.props
    return(
      <div className="studio_listing">
        <h3><a href={studio.website} target="_blank" rel="noopener noreferrer">{studio.name}</a></h3>
        <h5>{studio.address.line_1}</h5>
        <h5>{studio.address.line_2}</h5>
        <br></br>
      </div>
    )
  }
}

export default Studio
