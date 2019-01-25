import React, {Component} from 'react'
import { favoriteInstructor } from '../actions/instructorActions'

class FavoriteHeart extends Component {
  handleFavorite(e, instructorId) {
    e.preventDefault()
    debugger
    favoriteInstructor(instructorId)
  }

  handleUnfavorite(e, instructor_id) {
    e.preventDefault()
    //unfavorite instructor action
    debugger
  }
  render() {
    const {instructor, userFavorites} = this.props

    const userFavoritesMatch = userFavorites.some((favorite) => favorite.instructor_id === instructor.id)
    let heart
    if (userFavorites) {
      heart = <a className="heart" onClick={e => this.handleUnfavorite(e, instructor.id)} style={{color: 'red'}}>&hearts;</a>
    } else {
      heart = <a className="heart" onClick={e => this.handleFavorite(e, instructor.id)} style={{color: '#c2c4c6'}}>&hearts;</a>
    }
    return(
      <h4>{heart}</h4>
    )
  }
}

export default FavoriteHeart
