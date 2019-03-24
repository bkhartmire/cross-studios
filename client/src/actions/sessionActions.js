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

export function googleAuth(response) {
  console.log("google console");
  console.log(response);
  debugger
  //this.signup(response, 'google');
}
