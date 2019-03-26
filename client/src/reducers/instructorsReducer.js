export default function instructorsReducer(
  state = {
    loading: false,
    instructorData: {},
    allInstructors: [],
  }, action) {
    switch (action.type) {
      case 'LOADING_INSTRUCTOR':
        return {...state, loading: true}
      case 'FETCH_INSTRUCTOR':
        return {...state, loading: false, instructorData: action.payload}
      case 'LOADING_ALL_INSTRUCTORS':
        return {...state, loading: true}
      case 'FETCH_ALL_INSTRUCTORS':
        return {...state, loading: false, allInstructors: action.payload}
      case 'CREATE_REVIEW':
        let instructor = { ...state.instructorData }
        if (!!action.payload.duplicate) {
          let duplicate_review = instructor.reviews.find(review => review.user_id === action.payload.review.user_id)
          duplicate_review.text = action.payload.review.text
        } else {
          instructor.reviews.push(action.payload.review)
        }
        return {...state, instructorData: instructor }
      default:
        return state
    }
  }
