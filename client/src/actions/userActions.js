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

export const fetchUserFavorites = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_USER_FAVORITES'})
  }
}
