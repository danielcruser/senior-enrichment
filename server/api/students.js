const router = require('express').Router()


// get all students
router.get('/', (req, res) => res.json({data: 'student data here'}))

//get a student by ID
router.get('/:studentId', (req, res) => res.json({data: req.params.studentId}))
//post a student
router.post('/', (req, res) => {
 //TODO
})

//TODO:  put/update route && delete route


module.exports = router
