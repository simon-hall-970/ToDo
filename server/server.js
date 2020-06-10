const express = require('express')

const server = express()

const tasks = require('./routes/routes')

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/', tasks)

module.exports = server