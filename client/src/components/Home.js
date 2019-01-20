import React, { Component } from 'react'
import StudioList from '../containers/StudioList'

class Home extends Component {
  render(){
    const {studios} = this.props
    return(
      <div>
      <h1>React Home Page</h1>
      <StudioList/>
      </div>
    )
  }
}

export default Home
