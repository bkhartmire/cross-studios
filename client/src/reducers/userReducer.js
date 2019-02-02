import Auth from '../modules/Auth'

const initialState = {
  loading: false,
  auth: Auth.isUserAuthenticated(),
  current: {}
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
      return { ...state, auth: action.payload }
    case 'FETCH_USER':
      return { ...state, current: action.payload}
    case 'LOADING_USER_FAVORITES':
      return {...state, loading: true}
    case 'FETCH_USER_FAVORITES':
      return {...state, loading: false, favorites: action.payload}
    case 'DELETE_REVIEW':
      let current_user = { ...state.current }
      current_user.reviews = current_user.reviews.filter(review => review.id !== action.payload.id)
      return {...state, current: current_user}
    case 'ADD_TO_SCHEDULE':
      current_user = { ...state.current }
      current_user.dance_classes.push(action.payload)
      return {...state, current: current_user}
    case 'REMOVE_FROM_SCHEDULE':
       current_user = { ...state.current }
       current_user.dance_classes = current_user.dance_classes.filter((danceClass) => danceClass.id !== action.payload.id)
       return {...state, current: current_user}
    case 'FAVORITE_INSTRUCTOR':
      current_user = { ...state.current }
      current_user.favorites.push(action.payload)
      return {...state, current: current_user}
    case 'UNFAVORITE_INSTRUCTOR':
      current_user = { ...state.current }
      current_user.favorites = current_user.favorites.filter((favorite) => favorite.id !== action.payload.id)
      return {...state, current: current_user}
    default:
      return state
  }
}
