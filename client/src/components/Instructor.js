import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteHeart from './FavoriteHeart'

const Instructor = ({instructor, userFavorites, favoriteInstructor, unfavoriteInstructor}) =>
  <span className="instructor">
    <h3><Link to={`/instructors/${instructor.id}`}>{instructor.name}</Link>
    <FavoriteHeart instructor={instructor} userFavorites={userFavorites} favoriteInstructor={favoriteInstructor} unfavoriteInstructor={unfavoriteInstructor}/></h3>

  </span>

export default Instructor
