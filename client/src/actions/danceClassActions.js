import Auth from '../modules/Auth'

export const fetchDanceClasses = () => {
  return dispatch => {
    dispatch({type: 'LOADING_DANCE_CLASSES'})
    return fetch('/api/dance_classes', {
      accept: 'application/json',
    }).then(resp => resp.clone().json())
      .then(danceClasses => dispatch({type: 'FETCH_DANCE_CLASSES', payload: danceClasses}))
  }
}

export const fetchUserDanceClasses = () => {
  return dispatch => {
    dispatch({type: 'LOADING_USER_DANCE_CLASSES'})
    fetch('/api/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => res.json())
    .then(user_profile_info => user_profile_info.dance_classes)
    .then(dance_classes => dispatch({type: 'FETCH_USER_DANCE_CLASSES', payload: dance_classes}))
  }

}
