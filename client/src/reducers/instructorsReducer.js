export default function instructorsReducer(
  state = {
    loading: false,
    instructor_data: [],
    all_instructors: [],
    favorites: []
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
      case 'CREATE_FAVORITE':
        return {...state, favorites: [...state.favorites, action.payload]}
      default:
        return state
    }
  }
