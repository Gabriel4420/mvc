const { DataTypes } = require('sequelize')

const db = require('../services/conn')

const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    required: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    required: true,
  },
})

module.exports = Task
