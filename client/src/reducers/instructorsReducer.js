export default function instructorsReducer(
  state = {
    loading: false,
    instructor_data: [],
    all_instructors: [],
    reviews: [],
  }, action) {
    switch (action.type) {
      case 'LOADING_INSTRUCTOR':
        return {...state, loading: true}
      case 'FETCH_INSTRUCTOR':
        return {...state, loading: false, instructor_data: action.payload}
      case 'LOADING_ALL_INSTRUCTORS':
        return {...state, loading: true}
      case 'FETCH_ALL_INSTRUCTORS':
        return {...state, loading: false, all_instructors: action.payload}
      case 'CREATE_REVIEW':
        let instructor = [...state.instructor_data]
        instructor.reviews.push(action.payload)
        return {...state, instructor_data}
      default:
        return state
    }
  }
