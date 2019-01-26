import React, { Component } from 'react'
import Review from './Review'

class ReviewsList extends Component {
  render() {
    const {reviews, instructorId} = this.props
    const listReviews = reviews.map((review, index) => {
      return <Review key={index} review={review} />
    })
    return(
      <div>
        <h3>Instructor Reviews:</h3>
        <ul>
          {listReviews}
        </ul>
      </div>
    )
  }
}

export default ReviewsList
