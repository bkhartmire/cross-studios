import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import { loginUser, googleAuth } from '../actions/sessionActions'

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
    this.handleGoogleAuth = this.handleGoogleAuth.bind(this)
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

  handleGoogleAuth(response) {
    this.props.googleAuth(response)
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
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login with Google"
              onSuccess={this.handleGoogleAuth}
            />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
  googleAuth,
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)
