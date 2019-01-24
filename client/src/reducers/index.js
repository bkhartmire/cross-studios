import {combineReducers} from 'redux'
import danceClassesReducer from './danceClassesReducer'
import studiosReducer from './studiosReducer'
import userReducer from './userReducer'
import instructorReducer from './instructorReducer'

const rootReducer = combineReducers({
  danceClasses: danceClassesReducer,
  studios: studiosReducer,
  user: userReducer,
  instructor: instructorReducer,
})

export default rootReducer
