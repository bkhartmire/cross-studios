export const loginUser = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }
  debugger

  return (dispatch) => {
    debugger
    fetch('api/login', data)
      .then(response => response.json())
      .then(user => {
        sessionStorage.setItem('jwt', user.jwt)

        dispatch({
          type: 'SET_USER',
          payload: user.current
        })
        debugger
        callback()
      })
      .catch(err => err)
  }
}

export const signupUser = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }

  return dispatch => {
    fetch('/api/signup', data)
      .then(response => response.json())
      .then(user => {
        sessionStorage.setItem('jwt', user.jwt)

        dispatch({
          type: 'SET_USER',
          payload: user.current
        })

        callback()
      })
      .catch(err => err)
  }
}

export const fetchUser = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch('/api/user', data)
      .then(response => response.json())
      .then(user => {
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })
      .catch(err => err)
  }
}
