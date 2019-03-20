import sessionApi from '../api/SessionApi';

export function loginUser(credentials) {
  return dispatch => {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch({
        type: 'LOG_IN_SUCCESS'
      });
    }).catch(error => {
      throw(error);
    });
  };
}
