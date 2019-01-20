export default function danceClassesReducer(
  state = {
    loading: false,
    all: []
  }, action) {
    switch (action.type) {
      case 'LOADING_DANCE_CLASSES':
        return { ...state, loading: true}
      case 'FETCH_DANCE_CLASSES':
        return {...state, loading: false, all: action.payload}
        console.log(state)
      default:
        return state
    }
  }
