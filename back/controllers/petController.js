const Pet = require('../models/petModel')
const User = require('../models/userModel')

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
            avatar
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
            avatar
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
        const pets = await Pet.findAll({
            include: [
                {
                    model: User,
                    as: 'owner',
                    attributes: ['firstname', 'lastname', 'avatar','role'],
                },
            ],
        })
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
        const pet = await Pet.findOne({
            where: {id: req.params.id},
            include: [
                {
                    model: User,
                    as: 'owner',
                    attributes: ['firstname', 'lastname', 'avatar','email'],
                },
            ]
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
        const pet = await Pet.update(req.body, {where: {id: req.params.id}})
        //console.log('Infos pet', pet)

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
        const pet = await Pet.destroy({
            where: {id: req.params.id},
        })
        res.status(200).json({message: 'Suppression réalisée'})
    } catch (error) {
        res.status(500).json({
            message: "Erreur à la suppression de l'animal",
            error: error,
        })
    }
}

exports.getAllPetsOfUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const pets = await Pet.findAll({
            where: {
                id_owner: userId
            }
        })
        res.status(200).json(pets)
    } catch (error) {
        res.status(500).json({
            message: 'Erreur à la récupération des animaux',
            error: error,
        })
    }
}
