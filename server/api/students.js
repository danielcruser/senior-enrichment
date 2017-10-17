const router = require('express').Router()
const Student = require('../../db/models/student')

// get all students
router.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.send(students))
  .catch(next)
})

//get a student by ID
router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => res.send(student))
  .catch(next)
})
//post a student
router.post('/', (req, res, next) => {
  Student.create(req.body)
  .then(student => res.send(student))
  .catch(next)
})

//TODO:  put/update
router.delete('/:studentId', (req, res, next) => {
  Student.destroy({where: {id: req.params.studentId}})
  .then(() => res.send('destroyed'))
  .catch(next)
})

module.exports = router
