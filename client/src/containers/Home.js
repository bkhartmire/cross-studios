import React, { Component } from 'react'
//create this action!
import { fetchStudios } from '../actions/studioActions'

class Home extends Component {
  componentDidMount(){
    this.props.fetchStudios()
  }

  render(){
    return(
      <div>
        <h1>Manage your class schedule from these top LA dance studios!</h1>
      </div>
    )
  }
}


export default Home
