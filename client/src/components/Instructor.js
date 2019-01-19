import React, {Component} from 'react'

class Instructor extends Component {
  constructor(props){
    super(props)
    this.state= {
      name: '',
      video_url: '',
      favorited_count: 0,
      dance_classes: []
    }
  }

  updateData(data) {
    this.setState({
      name: data.name,
      video_url: data.video_url,
      favorited_count: data.favorited_count,
      dance_classes: data.dance_classes
    })
  }

  componentDidMount() {
    this.id = this.props.match.params.id
    const data = this.props.location.state.instructor
    this.updateData(data)
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
