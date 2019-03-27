export const fetchDanceClasses = () => {
  return dispatch => {
    dispatch({type: 'LOADING_DANCE_CLASSES'})
    return fetch('/api/dance_classes', {
      accept: 'application/json',
      headers: {
        'Authorization': `Bearer ${sessionStorage.jwt}`
      }
    }).then(resp => resp.clone().json())
      .then(danceClasses => dispatch({type: 'FETCH_DANCE_CLASSES', payload: danceClasses}))
  }
}

export const fetchCalendar = () => {
  //dispatch in dance classes reducer
  return dispatch => {
    dispatch({type: 'LOADING_CALENDAR'})
    return fetch('/api/calendar', {
      accept: 'application/json',
      headers: {
        'Authorization': `Bearer ${sessionStorage.jwt}`
      }
    }).then(resp => resp.clone().json())
      .then(danceClasses => dispatch({type: 'FETCH_CALENDAR', payload: danceClasses}))
  }
}
