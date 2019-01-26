import React, { Component } from 'react'
//add delete and edit review for users

class Review extends Component {
  render() {
    const { review } = this.props
    return(
      <div>
        <li>{review.text}</li>
      </div>
    )
  }
}

export default Review
