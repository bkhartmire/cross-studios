import React, {Component} from 'react'

class Instructor extends Component {
  constructor(props){
    super(props)
    this.state= {
      name: '',
      video_url: '',
      favorited_count: 0,
      dance_classes: [],
    }
  }

  updateData(instructor_data, studio_data) {
    this.setState({
      id: instructor_data.id,
      name: instructor_data.name,
      video_url: instructor_data.video_url,
      favorited_count: instructor_data.favorited_count,
      dance_classes: instructor_data.dance_classes
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
        <span>
          <h4>{dance_class.name}: {dance_class.day} {dance_class.time} at {dance_class.studio.name}</h4>
        </span>
      )
    })
    return(
      <div>
        <h1>{instructor.name}</h1>
        {listDanceClasses}
        <iframe width="560" height="315" src={instructor.video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Instructor
