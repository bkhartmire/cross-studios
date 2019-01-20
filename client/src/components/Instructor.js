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
      id: data.id,
      name: data.name,
      video_url: data.video_url,
      favorited_count: data.favorited_count,
      dance_classes: data.dance_classes
    })
  }

  componentDidMount() {
    const data = this.props.location.state.instructor
    this.updateData(data)
  }


  render(){
    const instructor = this.state
    const listDanceClasses = instructor.dance_classes.map(dance_class => {
      return(
        <li>
          <h4>{dance_class.name}: {dance_class.day} {dance_class.time} at "Put Studio Here"</h4>
        </li>
      )
    })
    return(
      <div>
        <h1>{instructor.name}</h1>
        <h3>Dance Classes:</h3>
        <ul>{listDanceClasses}</ul>
        <iframe width="560" height="315" src={instructor.video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Instructor
