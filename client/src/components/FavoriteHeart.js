import React, {Component} from 'react'


class FavoriteHeart extends Component {

  // handleFavorite(e, instructorId) {
  //   e.preventDefault()
  //   favoriteInstructor(instructorId)
  // }
  //
  // handleUnfavorite(e, favoriteId, instructorId) {
  //   e.preventDefault()
  //   unfavoriteInstructor(favoriteId, instructorId)
  // }

  render() {
    const {instructor, userFavorites, favoriteInstructor, unfavoriteInstructor} = this.props

    let userFavoritesMatch
    if (userFavorites && userFavorites.length > 0) {
      userFavoritesMatch = userFavorites.find((favorite) => favorite.instructor_id === instructor.id)
    }
    let heart
    if (userFavoritesMatch) {
      heart = <a className="heart favorited" onClick={() => unfavoriteInstructor(userFavoritesMatch.id, instructor.id)}>&hearts;</a>
    } else {
      heart = <a className="heart not-favorited" onClick={() => favoriteInstructor(instructor.id)} >&hearts;</a>
    }
    return(
      <span>{heart}</span>
    )
  }
}

export default FavoriteHeart
