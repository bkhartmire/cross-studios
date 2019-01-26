export default function instructorsReducer(
  state = {
    loading: false,
  }, action) {
    switch (action.type) {
      case 'LOADING_REVIEWS':
        return { ...state, loading: true}
      default:
        return state
  }
}
