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

export const favoriteInstructor = instructor_id => {
  return dispatch => {
    fetch('/api/favorites', {
      method: 'POST',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({instructor_id})
    })
    .then(resp => resp.json())
    .then(favorite => dispatch({
      type: 'CREATE_FAVORITE',
      payload: favorite
    }))
  }
}
