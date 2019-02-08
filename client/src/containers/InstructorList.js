import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchInstructors } from '../actions/instructorActions'
import { fetchUser, favoriteInstructor, unfavoriteInstructor } from '../actions/userActions'
import Instructor from '../components/Instructor'

class InstructorList extends Component {

  componentDidMount(){
    this.props.fetchInstructors()
    this.props.fetchUser()

  }

  handleSortByFavoritesClick(e, instructors, favorites) {
    e.preventDefault()
    instructors.sort(function(instructor) {
      if(favorites.some(fave => fave.instructor_id === instructor.id)) {
        return -1
      } else {
        return 1
      }
    })
    this.setState({instructors: instructors})
  }

  handleSortAZClick(e, instructors) {
    e.preventDefault()
    instructors.sort(function(a, b) {
      if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
    })
    this.setState({instructors: instructors})
  }

  render() {
    const {user, instructors} = this.props

    return(
      <div className="instructorList">
        <h1>Instructors</h1>
        <button onClick={e => this.handleSortByFavoritesClick(e, instructors, user.favorites)}>Sort By Favorites</button>
        <button onClick={e => this.handleSortAZClick(e, instructors)}>Sort A-Z</button>
        {instructors.map(instructor => <Instructor key={instructor.id} instructor={instructor} userFavorites={user.favorites} favoriteInstructor={this.props.favoriteInstructor} unfavoriteInstructor={this.props.unfavoriteInstructor}/>)}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    instructors: state.instructors.all_instructors,
    user: state.user.current,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchInstructors,
  fetchUser,
  favoriteInstructor,
  unfavoriteInstructor
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InstructorList)
