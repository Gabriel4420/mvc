const express = require('express')

const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.saveTask)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/update', TaskController.updateTask)
router.post('/toggle', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTask)

module.exports = router
