import React, {Component} from 'react'

class Instructor extends Component {
  constructor(props){
    super(props)
    this.state= {
      name: ''
    }
  }

  updateData() {
    this.setState({
      name: this.name
    })
    debugger
  }

  componentDidMount() {
    this.id = this.props.match.params.id
    //this.setState({
    //  name: {this.props.location.state.instructor.name}
    //})
    this.name = this.props.location.state.instructor.name
    //const {instructor} = this.props.location.state
    this.updateData()
    debugger
  }


  render(){
    console.log(this.id)
    return(
      <div>
        <h1>This is the instructor component.</h1>
        <h2>{this.state.name}</h2>

      </div>
    )
  }
}

export default Instructor
