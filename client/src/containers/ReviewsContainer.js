import React, { Component } from 'react'
import ReviewForm from '../components/ReviewForm'
import ReviewsList from '../components/ReviewsList'

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewForm instructorId={this.props.instructorId}/>
        <ReviewsList reviews={this.props.reviews} instructorId={this.props.instructorId}/>
      </div>
    )
  }
}

export default ReviewsContainer
