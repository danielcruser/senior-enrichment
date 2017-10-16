const sequelize = require('sequelize')
const db = require('../index.js')

const Student = db.define('student', {
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})
module.exports = Student
