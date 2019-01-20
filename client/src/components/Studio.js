import React, {Component} from 'react'

class Studio extends Component {
  render() {
    const {studio} = this.props
    return(
      <div className="studio_listing">
        <h3>{studio.name}</h3>
      </div>
    )
  }
}

export default Studio
