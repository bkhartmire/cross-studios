export const fetchStudios = () => {

  return (dispatch) => {
    dispatch({type: 'LOADING_STUDIOS'})
    return fetch('/api/studios', {
      accept: 'application/json',
      headers: {
        'Authorization': `Bearer ${sessionStorage.jwt}`
      }
    }).then(resp => resp.clone().json())
      .then(studios => dispatch({type: 'FETCH_STUDIOS', payload: studios}))
  }
}
