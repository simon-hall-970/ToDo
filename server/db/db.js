const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const db = knex(config[env])

function getTaskList () {
    return db('tasks')
    .then (tasks => {
        return tasks
    })
}

function addTask (newTaskObj) {
    return db('tasks')
    .insert(newTaskObj)
    .then(id => id)
}

function removeTask (id) {
    return db('tasks')
    .where('id', id)
    .del()
}

function updateTask (id, updateTaskObj) {
    return db('tasks')
    .where('id', id)
    .update(udpateTaskObj)
}

function markCompleted (id, completionStatus) {
    return db('tasks')
    .where('id', id)
    .update('completed', completionStatus)
}

module.exports = {
    getTaskList,
    addTask,
    removeTask,
    updateTask,
    markCompleted
}