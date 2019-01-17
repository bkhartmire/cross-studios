export default function danceClassesReducer(
  state = {
    loading: false,
    names: []
  }, action) {
    switch (action.type) {
      case 'LOADING_DANCE_CLASSES':
        return { ...state, loading: true}
      case 'FETCH_DANCE_CLASSES':
        return {...state, loading: false, names: action.payload}
      default:
        return state
    }
  }
