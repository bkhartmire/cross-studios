$(document).ready(function() {
  getPlaygroundDanceClasses()
})

class DanceClass{
  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.studio_id = obj.studio_id
    this.instructor_id = obj.instructor_id
    this.day = obj.day
    this.time = obj.time
  }
}

function getPlaygroundDanceClasses(){
  const playgroundURL = 'https://www.playgroundla.dance/schedule/'
  request = $.ajax({
    type: "GET",
    url: playgroundURL,
    success: function(result){console.log(result)},
    error: function(error){console.log('Something went wrong.', error)}
  })
}
