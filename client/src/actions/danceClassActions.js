export const fetchDanceClasses = () => {

  return (dispatch) => {

    dispatch({type: 'LOADING_DANCE_CLASSES'})
    return fetch('/api/dance_classes')
      .then(resp => resp.json())
      .then(danceClasses => dispatch({type: 'FETCH_DANCE_CLASSES', payload: danceClasses.all}))
  }
}
