import React from 'react'
import Instructor from './Instructor'

const DanceClass=({danceClass}) =>
  <div class="dance_class_listing">
    <h4>{danceClass.instructor}: {danceClass.name}</h4>
    <h2></h2>
  </div>

export default DanceClass
