import Auth from '../modules/Auth'

export const loginUser = (user) => {
  return dispatch => {
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)

      dispatch({
        type: 'SET_USER',
        payload: Auth.isUserAuthenticated()
      })

      document.location.reload()
    }).catch(err => console.log(err))
  }
}

export const signupUser = (formData) => {
  return dispatch => {
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        user: formData,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)

      dispatch({
        type: 'SET_USER',
        payload: Auth.isUserAuthenticated()
      })
      document.location.reload()


    }).catch(err => console.log(err))
  }
}

export const fetchUser = () => {
  
}

export const fetchUserFavorites = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_USER_FAVORITES'})
    fetch('/api/favorites', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => res.json())
    .then(favorites => dispatch({type:'FETCH_USER_FAVORITES', payload: favorites}))
  }
}
