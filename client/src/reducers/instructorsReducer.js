export default function instructorsReducer(
  state = {
    loading: false,
    instructor_data: []
  }, action) {
    switch (action.type) {
      case 'LOADING_INSTRUCTOR':
        return {...state, loading: true}
      case 'FETCH_INSTRUCTOR':
        return {...state, loading: false, instructor_data: action.payload}
      case 'LOADING_INSTRUCTORS':
        return {...state, loading: true}
      case 'FETCH_INSTRUCTORS':
        return {...state, loading: false, instructor_data: action.payload}
      default:
        return state
    }
  }
