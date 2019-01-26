import React, { Component } from 'react'
import { createReview } from '../actions/reviewActions' 

class ReviewForm extends Component {
  constructor(){
    super()
    this.state = {
      text: '',
    }
  }

  handleOnChange = e => {
    this.setState({ text: event.target.value})
  }

  handleOnSubmit = e => {
    e.preventDefault()
    //add review action that will fetch post request. pass in this.state.text & this.props.instructor id. Userid will be determined by headers and id determined in controller
    this.props.addReview({text: this.state.text, instructorId: this.props.isntructorId})
    this.setState({text: '',})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>New Review:</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
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
