export function loginUser(credentials) {
  return dispatch => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({auth: credentials})
    }).then(resp => resp.json())
    .catch(err => err)
    .then(response => {
      sessionStorage.setItem('jwt', response.jwt)
      dispatch({
        type: 'LOG_IN_SUCCESS'
      })
    }).catch(err => err)
  }
}

export function logoutUser() {
  sessionStorage.removeItem('jwt');
  return dispatch => {
    dispatch({type: 'LOG_OUT'})
  }
}

export const googleAuth = (response) => {
  const userInfo = {
    firstname: response.w3.ofa,
    lastname: response.w3.wea,
    email: response.w3.U3,
    google_token: response.accessToken
  }
  return dispatch => {
    fetch('/api/auth/google_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    }).then(resp => resp.json())
    .catch(err => err)
    .then(response => {
      sessionStorage.setItem('jwt', response.jwt)
      dispatch({
        type: 'LOG_IN_SUCCESS'
      })
    }).catch(err => err)
  }
}
