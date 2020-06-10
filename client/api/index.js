const request = require('superagent')

const taskListUrl = 'http://localhost:3000/api/v1/'

export function getList() {
    return request
    .get(taskListUrl)
    .then(res => res.body)
}


