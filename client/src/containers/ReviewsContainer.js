import React, { Component } from 'react'
import ReviewForm from '../components/ReviewInput'
import ReviewsList from '../components/ReviewsList'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewForm instructorId={this.props.instructor.id}/>
        <ReviewsList reviews={this.props.reviews} instructorId={this.props.instructor.id}/>
      </div>
    )
  }
}
