const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getTaskList()
    .then(id => {
        res.send(id)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
}) 

router.post('/', (req, res) => {
    const newTask = req.body
    db.addTask(newTask)
    .then(id => {
        res.send(id)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.put('/complete/:id', (req, res) => {
    const id = req.params.id
    const status = req.body.completed
    db.markCompleted(id, status)
    .then(task => {
        res.json({})
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.put('/update/:id', (req, res) => {
    const id = req.params.id
    const update = {
        task: req.body.task,
        description: req.body.description,
        priority: req.body.priority
    }
    db.updateTask(id, update)
    .then(task => {
        res.json(task)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
    const id=req.params.id
    db.removeTask(id)
    .then(delTAsk => {
        res.json({})
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

module.exports = router