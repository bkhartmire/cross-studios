import React from 'react'
import Instructor from './Instructor'

const DanceClass=({danceClass}) =>
  <div className="dance_class_listing">
    <h4>{danceClass.instructor_name}: {danceClass.name}</h4>
    <h2></h2>
  </div>

export default DanceClass
