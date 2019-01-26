import React, { Component } from 'react'

class ReviewForm extends Component {
  constructor(){
    super()
    this.state = {
      text: '',
    }
  }

  handleOnChange = e => {
    e.preventDefault()
  }

  handleOnSubmit = e => {
    e.preventDefault()
    //add review action that will fetch post request. pass in this.state.text & this.props.instructor id. Userid will be determined by headers and id determined in controller
  }
}
