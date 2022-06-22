const express = require('express')

const exphbs = require('express-handlebars')

const app = express()

const conn = require('./services/conn')

const Task = require('./models/Task')

const tasksRoutes = require('./routers/taskRoutes')

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', tasksRoutes)

conn
  .sync()
  .then((_) => app.listen(3000))
  .catch((err) => console.log(err))
