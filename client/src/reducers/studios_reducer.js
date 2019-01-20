export default function studiosReducer(
  state = {
    loadding: false,
    all: []
  }, action) {
    switch (action.type) {
      case 'LOADING_STUDIOS':
        return { ...state, loading: true}
      case 'FETCH_STUDIOS':
        return {...state, loading: false, all: action.payload}
        console.log(state)
      default:
        return state
    }
  }
