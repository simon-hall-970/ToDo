const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const deb = knex(config[env])

function getTaskList () {
    return deb('tasks')
    .then (tasks => {
        return tasks
    })
}

function addTask (newTaskObj) {
    return deb('tasks')
    .insert(newTaskObj)
    .then(id => id)
}

function removeTask (id) {
    return deb('tasks')
    .where('id', id)
}

function updateTask (id, updateTaskObj) {
    return deb('tasks')
    .where('id', id)
    .update(udpateTaskObj)
}

function markCompleted (id, completionStatus) {
    return deb('tasks')
    .where('id', id)
    .update('copmpleted', completionStatus)
}

module.exports = {
    getTaskList,
    addTask,
    removeTask,
    updateTask,
    markCompleted
}