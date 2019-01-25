import React, {Component} from 'react'
import { favoriteInstructor } from '../actions/instructorActions'

class FavoriteHeart extends Component {
  render() {
    const {instructor, userFavorites} = this.props
    return(
      <h4>heart</h4>
    )
  }
}

export default FavoriteHeart
