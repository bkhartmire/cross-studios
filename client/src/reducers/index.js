import {combineReducers} from 'redux'
import danceClassesReducer from './danceClassesReducer'
import studiosReducer from './studiosReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  danceClasses: danceClassesReducer,
  studios: studiosReducer,
  user: userReducer
})

export default rootReducer
