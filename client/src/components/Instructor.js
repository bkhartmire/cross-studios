import React from 'react'

const Instructor = ({instructor}) =>
  <div className="instructor">
    <a href={`/instructors/${instructor.id}`}><h3>{instructor.name}</h3></a>
  </div>

export default Instructor
