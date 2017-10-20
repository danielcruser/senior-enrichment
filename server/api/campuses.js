const router = require('express').Router()
const Campus = require('../../db/models/campus')
const Student = require('../../db/models/student')
// get all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next)
})

//get a campus by ID
router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.send(campus))
    .catch(next)
})
//post a campus
router.post('/', (req, res, next) => {
  Campus.create({
      name: req.body.name
    })
    .then(campus => res.send(campus))
    .catch(next)
})

router.delete('/:campusId', (req, res, next) => {
  Student.findAll({
      where: {
        campusId: req.params.campusId
      }
    })
    .then(students => {
      if (!students.length) {
        Campus.destroy({
            where: {
              id: req.params.campusId
            }
          })
          .then(() => res.send(' destroyed'))
      } else {
        res.send('cannot destroy a campus in use')
      }
    })
    .catch(next)
})

router.put('/:campusId', (req, res, next) => {
  Campus.update({
      name: req.body.name
    }, {
      where: {
        id: req.params.campusId
      }
    })
    .then((campus) => res.send(campus))
    .catch(next)
})


module.exports = router
