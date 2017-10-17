const sequelize = require('sequelize')
const db = require('../index.js')

const Campus = db.define('campus', {
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  image: {
    type: sequelize.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  }
})
module.exports = Campus
