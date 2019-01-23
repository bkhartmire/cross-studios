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

export const addToUserSchedule = (e, data) => {
  debugger
  fetch('/api/user_dance_classes', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      token: Auth.getToken(),
      'Authorization': `Token ${Auth.getToken()}`,
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(alert("Class added to your schedule."))
  .catch(error => console.error('Error:', error))
  e.target.style.backgroundColor = 'gray'
  e.target.innerHTML = "Remove from Schedule"
}

export const removeFromUserSchedule = (e, data) => {
  alert('Class removed from your schedule.')
  e.target.style.backgroundColor = ''
  e.target.innerHTML = "Add Class to Schedule"
}
