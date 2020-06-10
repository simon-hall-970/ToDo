import {combineReducers} from 'redux'

import errorMessage from './error-message'
import taskList from './task-list'

export default combineReducers({
    errorMessage,
    taskList
})