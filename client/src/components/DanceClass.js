import React from 'react'
import Instructor from './Instructor'

const DanceClass=({danceClass}) =>
  <div className="dance_class_listing">
    <h3>{danceClass.instructor.name}: {danceClass.name}</h3>
    <h4>{danceClass.day} {danceClass.time}</h4>
    <h4>{danceClass.studio.name}</h4>
    <br></br>
  </div>

export default DanceClass
