const Pet = require('../models/petModel')

exports.createPet = async (req, res) => {
    try {
        const {
            name,
            gender,
            color,
            specie,
            weight,
            height,
            birth_date,
            id_owner,
        } = req.body
        const pet = await Pet.create({
            name,
            gender,
            color,
            specie,
            weight,
            height,
            birth_date,
            id_owner,
        })
        res.status(200).json(pet)
    } catch (error) {
        res.status(500).json({
            message: "Erreur à la création de l'animal",
            error: error,
        })
    }
}

exports.getAllPets = async (req, res) => {
    try {
        const pets = await Pet.findAll()
        res.status(200).json(pets)
    } catch (error) {
        res.status(500).json({
            message: 'Erreur à la récupération des animaux',
            error: error,
        })
    }
}

exports.getPetById = async (req, res) => {
    try {
        const {id} = req.body
        const pet = await Pet.findOne({
            where: {id: id},
        })
        res.status(200).json(pet)
    } catch (error) {
        res.status(500).json({
            message: "Erreur à la récupération de l'animal",
            error: error,
        })
    }
}

exports.updatePet = async (req, res) => {
    try {
        const {id} = req.body
        delete req.body.id

        const pet = await Pet.update(req.body, {where: {id: id}})
        console.log('Infos pet', pet)

        res.status(200).json({message: 'Mise à jour réussie', infos: pet})
    } catch (error) {
        res.status(500).json({
            message: "Erreur à la mise à jour de l'animal",
            error: error,
        })
    }
}

exports.deletePet = async (req, res) => {
    try {
        const {id} = req.body
        const pet = await Pet.destroy({
            where: {id: id},
        })
        res.status(200).json({message: 'Suppression réalisée'})
    } catch (error) {
        res.status(500).json({
            message: "Erreur à la suppression de l'animal",
            error: error,
        })
    }
}
