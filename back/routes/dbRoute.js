const express = require('express')
const router = express.Router()

const middleware = require('../middlewares/middleware')
const Pet = require('../models/petModel')
const User = require('../models/userModel')

router.post('/createTableUser', (req, res) => {
    User.sync()
    res.status(200).json({message: 'creation de la table User réussie'})
})
router.post('/createTablePet', (req, res) => {
    Pet.sync()
    res.status(200).json({message: 'creation de la table Pet réussie'})
})

module.exports = router
