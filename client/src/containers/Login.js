import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { loginUser } from '../actions/userActions'

class Login extneds Component {
  constructor(){
    super()
    //Do you have to get rid of this filler code??
    this.state = {
      username: 'demo',
      password: 'password'
    }
  }
}
