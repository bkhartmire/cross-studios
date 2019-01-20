import React, { Component } from 'react'
//create this action!
//eventually split code into two files, home and StudioList
import { fetchStudios } from '../actions/studioActions'
import Studio from '../components/Studio'

class Home extends Component {
  componentDidMount(){
    this.props.fetchStudios()
  }

  render(){
    const {studios} = this.props
    return(
      <div>
        <h1>Manage your class schedule from these top LA dance studios!</h1>
        <ul>
          {studios.map((studio) => <Studio key={studio.id} studio={studio}/>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    studios: state.studios.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchStudios
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)
