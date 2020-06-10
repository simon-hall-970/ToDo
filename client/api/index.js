const request = require('superagent')

const taskListUrl = 'http://localhost:3000/api/v1/'

export function getList() {
    return request
    .get(taskListUrl)
    .then(res => res.body)
}

export function addTask(task) {
    return request
    .post(taskListUrl)
    .send(task)
    .then(res => res.body)
}

export function markComplete(taskId, completionStatus) {
    return request
    .put(`${taskListUrl}complete/${taskId}/`)
    .send(completionStatus)
    .then(res => res.body)
}

export function deleteTask(taskId) {
    return request
    .delete(taskListUrl+taskId)
    .then(res => res.body)
}
