import React, { Component } from 'react'
import Review from './Review'

class ReviewsList extends Component {
  render() {
    const {reviews, instructorId} = this.props
    const hasReviews = !!reviews && reviews.length > 0

    return(
      <div>
        <h3>Instructor Reviews:</h3>
        <ul>
          {hasReviews ? (
            reviews.map((review) => { return <Review review={review} />})
          ) : (<h5>This instructor doesn't have any reviews yet.</h5>)}
        </ul>
      </div>
    )
  }
}

export default ReviewsList
