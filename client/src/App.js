import React, { Component } from 'react';
import './App.css';
import routes from './routes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
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
