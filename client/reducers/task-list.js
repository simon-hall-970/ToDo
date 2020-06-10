import {GET_LIST} from '../actions'

function taskList (state=[], action) {
    switch (action.type) {

        case GET_LIST:
            return action.tasks

        default:
            return state
    }
}

export default taskList