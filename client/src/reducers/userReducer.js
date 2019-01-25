import Auth from '../modules/Auth'

const initialState = {
  loading: false,
  auth: Auth.isUserAuthenticated(),
  favorites: [],
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return { ...state, auth: action.payload }
    case 'LOADING_USER_FAVORITES':
      return {...state, loading: true}
    case 'FETCH_USER_FAVORITES':
      return {...state, loading: false, favorites: action.payload}

    default: return state
  }
}
