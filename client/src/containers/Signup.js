import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { handleSignupSubmit } from '../actions/userActions'

class Signup extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: ''
    }

    //this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const field = e.target.name
    let state = this.state
    state[field] = e.target.value
    this.setState(state)
  }

  // handleSubmit(e) {
  //   e.preventDefault()
  //
  //   const user = this.state
  //   this.props.signupUser(user, () => this.props.history.push('/'))
  // }

  render() {
    const { username, password, firstname, lastname } = this.state

    return (
      <div className="signup">
        <h1>Sign Up</h1>
        <form onSubmit={ (e) => handleSignupSubmit(e, this.state) }>
          <input name="username" placeholder="Username" value={ username } onChange={ this.handleChange }/><br/>
          <input type='password' name="password" placeholder="Password" value={ password } onChange={ this.handleChange }/><br/>
          <input name="firstname" placeholder="First Name" value={ firstname } onChange={ this.handleChange }/><br/>
          <input name="lastname" placeholder="Last Name" value={ lastname } onChange={ this.handleChange }/><br/>
          <button type="submit">Signup</button>
        </form>
        <Link to='/login'>Log In</Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  handleSignupSubmit
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Signup))
