const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const deb = knex(config[env])

function getTaskList () {
    return deb('todo')
    .then (tasks => {
        return tasks
    })
}

module.exports = {
    getTaskList
}