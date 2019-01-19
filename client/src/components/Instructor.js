import React, {Component} from 'react'

class Instructor extends Component {
  constructor(props){
    super(props)
    this.state= {
      name: '',
      video_url: ''
    }
  }

  updateData() {
    this.setState({
      name: this.name,
      video_url: this.video_url
    })
  }

  componentDidMount() {
    this.id = this.props.match.params.id
    this.name = this.props.location.state.instructor.name
    this.video_url = this.props.location.state.instructor.video_url
    this.updateData()
  }


  render(){
    const instructor = this.state
    return(
      <div>
        <h1>This is the instructor component.</h1>
        <h2>{instructor.name}</h2>
        <iframe width="560" height="315" src={instructor.video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    )
  }
}

export default Instructor
