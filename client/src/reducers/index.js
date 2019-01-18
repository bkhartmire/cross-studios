import {combineReducers} from 'redux'
import danceClassesReducer from './dance_classes_reducer'

const rootReducer = combineReducers({danceClasses: danceClassesReducer})

export default rootReducer
