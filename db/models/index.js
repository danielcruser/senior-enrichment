'use strict';
const Student = require('./student')
const Campus = require('./campus')

Student.belongsTo(Campus, {
	foreignKey: {
		allowNull: false
	}
})

module.exports = {
	Student: Student,
	Campus: Campus
}
