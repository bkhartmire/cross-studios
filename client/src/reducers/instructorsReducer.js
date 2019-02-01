export default function instructorsReducer(
  state = {
    loading: false,
    instructor_data: {},
    all_instructors: [],
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
        let instructor = { ...state.instructor_data }
        if (!!action.payload.duplicate) {
          let duplicate_review = instructor.reviews.find(review => review.user_id === action.payload.review.user_id)
          duplicate_review.text = action.payload.review.text
        } else {
          instructor.reviews.push(action.payload.review)
        }
        return {...state, instructor_data: instructor }
      default:
        return state
    }
  }
