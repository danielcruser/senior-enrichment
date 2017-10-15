const router = require('express').Router()

// get all students
router.get('/', (req, res) => res.json({data: 'campus data here'}))

//get a student by ID
router.get('/:campusId', (req, res) => res.json({campusData: req.params.campusId}))
//post a student
router.post('/', (req, res) => {
 //TODO
})

//TODO:  put/update route && delete route


module.exports = router
