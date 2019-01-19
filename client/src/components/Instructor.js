import React, {Component} from 'react'

class Instructor extends Component {
  componentDidMount() {
    const {id} = this.props.match.params
    const {instructor} = this.props.location.state
    debugger
  }
  render(){
    return(
      <div>
        <h1>This is the instructor component.</h1>
      </div>
    )
  }
}

export default Instructor
