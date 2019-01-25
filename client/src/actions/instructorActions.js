import Auth from '../modules/Auth'

export const fetchInstructor = (instructor_id) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_INSTRUCTOR'})
    return fetch(`/api/instructors${instructor_id}`, {
      accept: 'application/json',
    }).then(resp => resp.clone().json())
      .then(instructor => dispatch({type: 'FETCH_INSTRUCTOR', payload: instructor}))
  }
}

export const fetchInstructors = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_ALL_INSTRUCTORS'})
    return fetch('/api/instructors', {
      accept: 'application/json',
    }).then(resp => resp.clone().json())
    .then(instructors => dispatch({type: 'FETCH_ALL_INSTRUCTORS', payload: instructors}))
  }
}

export const favoriteInstructor = (instructorId) => {
  return (dispatch) => {
    fetch('/api/favorites', {
      method: 'POST',
      body: JSON.stringify({instructor_id: instructorId}),
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(favorite => dispatch({
      type: 'CREATE_FAVORITE',
      payload: favorite
    }))
    document.location.reload()
  }
}
