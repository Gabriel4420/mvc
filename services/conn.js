require('dotenv').config()

const { Sequelize } = require('sequelize')

const seq = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
  },
)

try {
  seq.authenticate()

  console.log('conexão feita com sucesso com o banco', process.env.DB_NAME)
} catch (error) {
  console.log(error)
}

module.exports = seq
