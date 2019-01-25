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
    dispatch({type: 'LOADING_INSTRUCTORS'})
    return fetch('/api/instructors', {
      accept: 'application/json',
    }).then(resp => resp.clone().json())
    .then(instructors => dispatch({type: 'FETCH_INSTRUCTORS', payload: instructors}))
  }
}
