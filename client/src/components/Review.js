import React, { Component } from 'react'
//add delete and edit review for users

class Review extends Component {
  render() {
    const { review } = this.props
    return(
      <div>
        <p>{review.text}</p>
      </div>
    )
  }
}

export default Review
