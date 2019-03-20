export default function sessionReducer(
  state = {
    session: !!sessionStorage.jwt
  }, action) {
    switch (action.type) {
      case 'LOG_IN_SUCCESS':
        browserHistory.push('/')
        return !!sessionStorage.jwt
      default:
        return state;
    }
}
