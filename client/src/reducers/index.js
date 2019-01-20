import {combineReducers} from 'redux'
import danceClassesReducer from './dance_classes_reducer'
import studiosReducer from './studios_reducer'

const rootReducer = combineReducers({danceClasses: danceClassesReducer, studios: studiosReducer})

export default rootReducer
