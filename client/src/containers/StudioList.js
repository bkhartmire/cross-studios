import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchStudios } from '../actions/studioActions'
import Studio from '../components/Studio'

class StudioList extends Component {
  componentDidMount(){
    this.props.fetchStudios()
  }

  render(){
    const {studios} = this.props
    debugger
    return(
      <div>
        <h1>Manage your class schedule from these top LA dance studios!</h1>

          {studios.map((studio) => <Studio key={studio.id} studio={studio}/>)}

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


export default connect(mapStateToProps, mapDispatchToProps)(StudioList)
