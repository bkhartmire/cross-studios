//import sessionApi from '../api/SessionApi';

export function loginUser(credentials) {
  debugger
  return dispatch => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
    .catch(err => err)

  //   return sessionApi.login(credentials)
  .then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch({
        type: 'LOG_IN_SUCCESS'
      });
    }).catch(error => {
      throw(error);
    });
  };
}
