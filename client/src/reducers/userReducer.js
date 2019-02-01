import Auth from '../modules/Auth'

const initialState = {
  loading: false,
  auth: Auth.isUserAuthenticated(),
  //delete favorites?
  favorites: [],
  current: {}
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return { ...state, auth: action.payload }
    case 'FETCH_USER':
      debugger
      return { ...state, current: action.payload}
    case 'LOADING_USER_FAVORITES':
      return {...state, loading: true}
    case 'FETCH_USER_FAVORITES':
      return {...state, loading: false, favorites: action.payload}
    case 'DELETE_REVIEW':
      debugger
      // instructor = { ...state.instructor_data }
      // instructor.reviews = instructor.reviews.filter(review => review.id !== action.payload.id)
      // return {...state, instructor_data: instructor}
    default:
      return state
  }
}
