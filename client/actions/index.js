import {getList} from '../api'

export const SHOW_ERROR = 'SHOW_ERROR'
export const GET_LIST = 'GET_LIST'

export const requestTaskList = (tasks) => {
    return{
        type: GET_LIST,
        tasks
    }
}

export function fetchList() {
    return(dispatch => {
        return getList()
        .then(taskArr => {
            return dispatch(requestTaskList(taskArr))
        })
    })
}

export const showError = (errorMessage) => {
    return {
        type: SHOW_ERROR,
        errorMessage
    }
}

