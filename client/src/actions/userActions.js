
// export const signupUser = (formData) => {
//   return dispatch => {
//     fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({
//         user: formData,
//       }),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       }
//     }).then(res => res.json())
//     // .then(res => {
//     //   Auth.authenticateToken(res.token)
//     //
//     //   dispatch({
//     //     type: 'SET_USER',
//     //     payload: Auth.isUserAuthenticated()
//     //   })
//
//       document.location.reload()
//
//
//     }).catch(err => console.log(err))
//   }
// }
//
// export const fetchUser = () => {
//   return dispatch => {
//     return fetch('/api/profile', {
//       method: 'GET',
//       // headers: {
//       //   token: Auth.getToken(),
//       //   'Authorization': `Token ${Auth.getToken()}`,
//       // }
//     }).then(res => res.json())
//     .then(user => dispatch({type: 'FETCH_USER', payload: user}))
//       .catch(err => console.log(err))
//   }
// }
//
// export const addToUserSchedule = (danceClassId) => {
//   return dispatch => {
//     fetch('/api/user_dance_classes', {
//       method: 'POST',
//       body: JSON.stringify({dance_class_id: danceClassId}),
//       headers: {
//         token: Auth.getToken(),
//         'Authorization': `Token ${Auth.getToken()}`,
//         'Content-Type': 'application/json',
//       }
//     }).then(res => res.json())
//     .then(userDanceClass => dispatch({
//       type: 'ADD_TO_SCHEDULE',
//       payload: userDanceClass
//     }))
//     .catch(error => console.error('Error:', error))
//     .then(alert("Class added to your schedule."))
//   }
// }
//
// export const removeFromUserSchedule = (danceClassId) => {
//   return dispatch => {
//     fetch(`/api/user_dance_classes/${danceClassId}`, {
//       method: 'DELETE',
//       headers: {
//         token: Auth.getToken(),
//         'Authorization': `Token ${Auth.getToken()}`,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     }).then(res => res.json())
//     .then(userDanceClass => dispatch({
//       type: 'REMOVE_FROM_SCHEDULE',
//       payload: userDanceClass
//     }))
//     .then(alert("Class removed from your schedule."))
//     .catch(error => console.error('Error:', error))
//   }
// }
//
// export const fetchUserFavorites = () => {
//   return (dispatch) => {
//     dispatch({type: 'LOADING_USER_FAVORITES'})
//     fetch('/api/favorites', {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         token: Auth.getToken(),
//         'Authorization': `Token ${Auth.getToken()}`,
//       }
//     }).then(res => res.json())
//     .then(favorites => dispatch({type:'FETCH_USER_FAVORITES', payload: favorites}))
//   }
// }
//
// export const favoriteInstructor = (instructorId) => {
//   //debugger
//   return dispatch => {
//     fetch('/api/favorites', {
//       method: 'POST',
//       headers: {
//         token: Auth.getToken(),
//         'Authorization': `Token ${Auth.getToken()}`,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify({instructor_id: instructorId}),
//     }).then(res => res.clone().json())
//     .then(favorite => dispatch({type: 'FAVORITE_INSTRUCTOR', payload: favorite}))
//     .catch(err => console.log(err))
//   }
// }
//
// export const unfavoriteInstructor = (favoriteId, instructorID) => {
//   return dispatch => {
//     fetch(`/api/favorites/${favoriteId}`, {
//       method: 'DELETE',
//       headers: {
//         token: Auth.getToken(),
//         'Authorization': `Token ${Auth.getToken()}`,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify({
//         favorite_id: favoriteId,
//         instructor_id: instructorID
//       }),
//     }).then(res => res.clone().json())
//     .then(favorite => dispatch({type: 'UNFAVORITE_INSTRUCTOR', payload: favorite}))
//     .catch(err => console.log(err))
//   }
//
// }
