import React, {Component} from 'react'

class Instructor extends Component {
  constructor(props){
    super(props)
    this.state= {
      name: '',
      video_url: '',
      dance_classes: []
    }
  }

  updateData() {
    this.setState({
      name: this.name,
      video_url: this.video_url,
      favorited_count: 0,
      dance_classes: this.dance_classes
    })
  }

  componentDidMount() {
    this.id = this.props.match.params.id
    this.name = this.props.location.state.instructor.name
    this.video_url = this.props.location.state.instructor.video_url
    this.favorited_count = this.props.location.state.instructor.favorited_count
    this.dance_classes = this.props.location.state.instructor.dance_classes
    this.updateData()
  }


  render(){
    const instructor = this.state
    return(
      <div>
        <h1>{instructor.name}</h1>
        <iframe width="560" height="315" src={instructor.video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    )
  }
}

export default Instructor
