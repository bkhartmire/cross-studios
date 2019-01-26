import Auth from '../modules/Auth'

export const createReview = (review, instructorId) => {
  debugger
  return dispatch => {
    fetch(`/api/instructos/${instructorId}/reviews`, {
      method: 'POST',
      body: JSON.stringify({ review: review }),
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }
}
