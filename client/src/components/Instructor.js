import React from 'react'
import { Link } from 'react-router-dom'

const Instructor = ({instructor}) =>
  <div className="instructor">
    <Link to={`/instructors/${instructor.id}`}><h3>{instructor.name}</h3></Link>
  </div>

export default Instructor
