import Auth from '../modules/Auth'

const initialState = {
  auth: Auth.isUserAuthenticated(),
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return { ...state, auth: action.payload }
    default: return state
  }
}
