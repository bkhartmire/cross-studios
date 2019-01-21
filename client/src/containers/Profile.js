import React, { Component } from 'react'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      usersDanceClasses: null,
      danceClassesLoaded: false,
    }
  }

  componentDidMount() {
    fetch('/profile', {})
  }
  render(){
    return(
      <div className="userProfile">
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default Profile
