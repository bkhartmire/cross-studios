export default function instructorReducer(
  state = {
    loading: false,
    all: []
  }, action) {
    switch (action.type) {
      case 'LOADING_INSTRUCTOR':
        return {...state, loading: true}
      default:
        return state
    }
  }
