const controllers = require('../controllers/period')
const router = require('express').Router()

router.get('/allPeriods', controllers.getAllPeriods)

router.post('/addPeriod', controllers.addPeriod)

router.put('/updatePeriod', controllers.updatePeriod)

router.delete('/deletePeriod', controllers.deletePeriod)

router.post('/getTotalPrice', controllers.totalPrice)

module.exports = router