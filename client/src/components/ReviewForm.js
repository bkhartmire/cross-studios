import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createReview } from '../actions/reviewActions'

class ReviewForm extends Component {
  constructor(){
    super()
    this.state = {
      text: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createReview({text: this.state.text, instructorId: this.props.isntructorId})
    this.setState({text: '',})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>New Review:</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createReview
}, dispatch)

export default connect(null, mapDispatchToProps)(ReviewForm)
