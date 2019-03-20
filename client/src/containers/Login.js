import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { loginUser } from '../actions/sessionActions'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const field = e.target.name
    const credentials = this.state.credentials
    credentials[field] = e.target.value
    return this.setState({credentials: credentials})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.loginUser(this.state.credentials)
  }

  render() {
    const { email, password } = this.state.credentials

    return(
      <div className="login">
        <h1>Log In</h1>
        <form onSubmit={ this.handleSubmit }>
            <input name="email" placeholder="Email" value={ email } onChange={ this.handleChange }/><br/>
            <input type='password' name="password" placeholder="Password" value={ password } onChange={ this.handleChange }/><br/>
            <button type="submit">Login</button>
          </form>
          <Link to='/signup'>Sign Up</Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Login))
