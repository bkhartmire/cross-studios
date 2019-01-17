import {combineReducers} from 'redux'
import danceClassesReducer from './dance_classes_reducer'

const rootReducer = combineReducers({dance_classes: danceClassesReducer})

export default rootReducer
