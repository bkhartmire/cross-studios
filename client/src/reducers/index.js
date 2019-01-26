import {combineReducers} from 'redux'
import danceClassesReducer from './danceClassesReducer'
import studiosReducer from './studiosReducer'
import userReducer from './userReducer'
import instructorsReducer from './instructorsReducer'
import reviewsReducer from './reviewsReducer'

const rootReducer = combineReducers({
  danceClasses: danceClassesReducer,
  studios: studiosReducer,
  user: userReducer,
  instructors: instructorsReducer,
})

export default rootReducer
