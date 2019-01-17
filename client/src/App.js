import React, { Component } from 'react';
import './App.css';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is src/App.js</h1>
        {routes}

      </div>
    );
  }
}

export default App;
