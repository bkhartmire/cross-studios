export default function danceClassesReducer(
  state = {
    loading: false,
    all: [],
    calendar: [],
  }, action) {
    switch (action.type) {
      case 'LOADING_DANCE_CLASSES':
        return { ...state, loading: true}
      case 'FETCH_DANCE_CLASSES':
        return { ...state, loading: false, all: action.payload}
      case 'LOADING_CALENDAR':
        return { ...state, loading: true}
      case 'FETCH_CALENDAR':
        return { ...state, loading:false, calendar: action.payload}
      default:
        return state
    }
  }
