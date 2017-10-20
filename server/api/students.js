const router = require('express').Router()
const Student = require('../../db/models/student')


router.get('/', (req, res, next) => {
  Student.findAll({
      include: [{
        all: true
      }]
    })
    .then(students => res.send(students))
    .catch(next)
})


router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => res.send(student))
    .catch(next)
})

router.post('/', (req, res, next) => {

  Student.create({
      name: req.body.name,
      email: req.body.email,
      campusId: req.body.campusId
    })
    .then(student => res.send(student))
    .catch(next)
})


router.delete('/:studentId', (req, res, next) => {
  Student.destroy({
      where: {
        id: req.params.studentId
      }
    })
    .then(() => res.send('destroyed'))
    .catch(next)
})

router.put('/:studentId', (req, res, next) => {

  Student.update({
      name: req.body.name,
      email: req.body.email,
      campusId: req.body.campusId
    }, {
      where: {
        id: req.params.studentId
      }
    })
    .then((student) => res.send(student))
    .catch(next)
})

module.exports = router
