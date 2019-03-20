export default function sessionReducer(
  state = {
    session: !!sessionStorage.jwt
  }, action) {
    switch (action.type) {
      case 'LOG_IN_SUCCESS':
        window.location.pathname = "/"
        return !!sessionStorage.jwt
      case 'LOG_OUT':
        window.location.pathname = "/login"
        return !!sessionStorage.jwt
      default:
        return state;
    }
}
