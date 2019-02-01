export default function danceClassesReducer(
  state = {
    loading: false,
    all: [],
    userDanceClasses: [],
  }, action) {
    switch (action.type) {
      case 'LOADING_DANCE_CLASSES':
        return { ...state, loading: true}
      case 'FETCH_DANCE_CLASSES':
        return {...state, loading: false, all: action.payload}
      case 'LOADING_USER_DANCE_CLASSES':
        return { ...state, loading: true}
      case 'FETCH_USER_DANCE_CLASSES':
        return {...state, loading: false, userDanceClasses: action.payload}
      case 'ADD_TO_SCHEDULE':
        let schedule = [ ...state.userDanceClasses ]
        schedule.push(action.payload)
        debugger
        return {...state, userDanceClasses: schedule}
      // case 'REMOVE_FROM_SCHEDULE':
      //   schedule = [ ...state.userDanceClasses ]
      //   debugger
      default:
        return state
    }
  }
