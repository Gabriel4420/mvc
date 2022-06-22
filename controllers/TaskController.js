const Task = require('../models/Task')

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create')
  }

  static async showTask(req, res) {
    const tasks = await Task.findAll({ raw: true })

    res.render('tasks/all', { tasks })
  }

  static async saveTask(req, res) {
    const { title, description } = req.body

    const task = {
      title,
      description,
      done: false,
    }

    await Task.create(task)

    setTimeout(() => {
      res.redirect('/tasks')
    }, 3000)
  }

  static async removeTask(req, res) {
    const { id } = req.body

    await Task.destroy({ where: { id } })

    res.redirect('/tasks')
  }

  static async editTask(req, res) {
    const { id } = req.params

    const task = await Task.findOne({ where: { id }, raw: true })

    res.render('tasks/edit', { task })
  }

  static async updateTask(req, res) {
    const { id, title, description } = req.body

    const newTask = {
      title,
      description,
    }

    await Task.update(newTask, { where: { id } })

    res.redirect('/tasks')
  }

  static async toggleTaskStatus(req, res) {
    const { id, done } = req.body

    const toggleDone = {
      done: done == 0 ? true : false,
    }

    await Task.update(toggleDone, { where: { id } })

    setTimeout(() => {
      res.redirect('/tasks')
    }, 3000)
  }
}
