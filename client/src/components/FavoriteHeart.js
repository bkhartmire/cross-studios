import React, {Component} from 'react'


class FavoriteHeart extends Component {

  componentDidMount() {
    this.favoriteInstructor = this.props.favoriteInstructor
    this.unfavoriteInstructor = this.props.unfavoriteInstructor
  }

  handleFavorite(e, instructorId) {
    e.preventDefault()
    this.favoriteInstructor(instructorId)
  }

  handleUnfavorite(e, favoriteId, instructorId) {
    e.preventDefault()
    this.unfavoriteInstructor(favoriteId, instructorId)
  }

  render() {
    const {instructor, userFavorites, favoriteInstructor, unfavoriteInstructor} = this.props

    let userFavoritesMatch
    if (userFavorites && userFavorites.length > 0) {
      userFavoritesMatch = userFavorites.find((favorite) => favorite.instructor_id === instructor.id)
    }
    let heart
    if (userFavoritesMatch) {
      heart = <a className="heart favorited" onClick={e => this.handleUnfavorite(e, userFavoritesMatch.id, instructor.id)}>&hearts;</a>
    } else {
      heart = <a className="heart not-favorited" onClick={e => this.handleFavorite(e, instructor.id)} >&hearts;</a>
    }
    return(
      <span>  {heart}</span>
    )
  }
}

export default FavoriteHeart
