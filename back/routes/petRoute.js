const express = require('express')
const router = express.Router()
const petController = require('../controllers/petController')
const middleware = require('../middlewares/middleware')

router.get('/all', petController.getAllPets)
router.get('/search/:id', petController.getPetById)
router.post('/create', petController.createPet)
router.put('/update/:id', petController.updatePet)
router.delete('/delete/:id', petController.deletePet)
router.get('/all/user/:id', petController.getAllPetsOfUser)

module.exports = router;