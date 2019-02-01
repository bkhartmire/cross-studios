import Auth from '../modules/Auth'

export const createReview = (review, instructorId) => {
  //dispatch action in instructor reducer
  return dispatch => {
    fetch(`/api/instructors/${instructorId}/reviews`, {
      method: 'POST',
      body: JSON.stringify({ review: review }),
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(resp => resp.json())
    .then(review => dispatch({
      type: 'CREATE_REVIEW',
      payload: review
    }))
    .catch(err => err)
  }
}

export const deleteReview = (id, instructorId) => {
  //dispatch action in user reducer
  debugger
  return dispatch => {
    fetch(`/api/instructors/${instructorId}/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(resp => resp.json())
    .then(review => dispatch({
      type: 'DELETE_REVIEW',
      payload: review
    }))
    .catch(err => err)
  }
}
