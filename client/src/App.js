import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Auth from './modules/Auth'

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
  }

  handleSignupSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
