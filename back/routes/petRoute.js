const express = require('express')
const router = express.Router()
const petController = require('../controllers/petController')
const middleware = require('../middlewares/middleware')

router.get('/all', petController.getAllPets)
router.get('/search', petController.getPetById)
router.post('/create', petController.createPet)
router.put('/update', petController.updatePet)
router.delete('/delete', petController.deletePet)

module.exports = router
