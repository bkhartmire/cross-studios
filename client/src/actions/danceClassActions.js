import Auth from '../modules/Auth'

export const fetchDanceClasses = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_DANCE_CLASSES'})
    return fetch('/api/dance_classes', {
      accept: 'application/json',
    }).then(resp => resp.clone().json())
      .then(danceClasses => dispatch({type: 'FETCH_DANCE_CLASSES', payload: danceClasses}))
  }
}

export const addToUserSchedule = (e, danceClassId) => {
  fetch('/api/user_dance_classes', {
    method: 'POST',
    body: JSON.stringify({dance_class_id: danceClassId}),
    headers: {
      token: Auth.getToken(),
      'Authorization': `Token ${Auth.getToken()}`,
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(alert("Class added to your schedule."))
  .catch(error => console.error('Error:', error))
  // e.target.style.backgroundColor = 'gray'
  // e.target.innerHTML = "Remove from Schedule"
  //document.location.reload()
}

export const removeFromUserSchedule = (e, userDanceClassId) => {
  debugger
  //need the userdanceClassid
  fetch(`/api/user_dance_classes/${userDanceClassId}`, {
    method: 'DELETE',
    headers: {
      //token: Auth.getToken(),
      //'Authorization': `Token ${Auth.getToken()}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(alert("Class removed from your schedule."))
  .catch(error => console.error('Error:', error))
  // e.target.style.backgroundColor = ''
  // e.target.innerHTML = "Add Class to Schedule"
  document.location.reload()
}
