const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

//--------- Create a user ---------//

exports.register = async (req, res) => {
    try {
        const {firstname, lastname, email, password, role, avatar, officeId} =
            req.body

        // Check if the email is already in use
        const existingUser = await User.findOne({where: {email: email}})
        if (existingUser) {
            return res
                .status(400)
                .json({message: 'This email is already in use.'})
        }

        // Hash the password for security
        const hash = await bcrypt.hashSync(password, 10)

        await User.create({
            firstname,
            lastname,
            email,
            password: hash,
            role,
            avatar,
            officeId,
        })

        // Generate a JWT token
        const token = jwt.sign({email}, process.env.SECRET_KEY, {
            expiresIn: '1h',
        })

        // Return the JWT token as a response
        res.status(201).json({token: token})
    } catch (error) {
        res.status(500).json({message: 'Error during user registration'})
    }
}

//--------- Login a user ---------//

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body

        // Find the user with the provided email
        const existingUser = await User.findOne({where: {email: email}})
        if (!existingUser) {
            return res
                .status(401)
                .json({message: 'Incorrect email or password'})
        }

        // Compare the provided password with the hashed password
        const hash = bcrypt.compareSync(password, existingUser.password)
        if (!hash) {
            return res
                .status(401)
                .json({message: 'Incorrect email or password'})
        }

        // Generate a JWT token
        const token = jwt.sign(
            {
                email: email,
                id: existingUser.dataValues.id,
                role: existingUser.role,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: '1h',
            }
        )
        res.status(200).json({token})
    } catch (error) {
        res.status(500).json({message: 'Error during user authentication'})
    }
}

//--------- Get all users ---------//

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message: 'Error recovering users',
        })
    }
}

//--------- Get a user by id ---------//

exports.getAllById = async (req, res) => {
    const userId = req.params.id
    try {
        const user = await User.findByPk(userId)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({message: 'User not found'})
        }
    } catch (error) {
        console.error('Error recovering user:', error)
        res.status(500).json({error: 'Error recovering user'})
    }
}

//--------- Update a user ---------//

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id // Supposons que l'ID de l'utilisateur à modifier est transmis dans les paramètres de l'URL
        const {firstname, lastname, email, password} = req.body

        // Check if the user to update exists
        const userToUpdate = await User.findByPk(userId)
        if (!userToUpdate) {
            return res.status(404).json({message: 'User not found'})
        }

        // Update user information if provided
        if (firstname) {
            userToUpdate.firstname = firstname
        }
        if (lastname) {
            userToUpdate.lastname = lastname
        }
        if (email) {
            userToUpdate.email = email
        }
        if (password) {
            // Hash the provided password before updating
            const hash = await bcrypt.hashSync(password, 10)
            userToUpdate.password = hash
        }

        // Save the modification
        await userToUpdate.save()

        res.status(200).json({message: 'User information updated successfully'})
    } catch (error) {
        res.status(500).json({
            message: 'Error updating user information',
        })
    }
}

//--------- Delete a user ---------//

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id // Supposons que l'ID de l'utilisateur à supprimer est transmis dans les paramètres de l'URL

        // Check if the user to delete exists
        const userToDelete = await User.findByPk(userId)
        if (!userToDelete) {
            return res.status(404).json({message: 'User not found'})
        }

        // Delete the user from database
        await userToDelete.destroy()
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await User.findAll({ where: { role: "doctor" } });
    if (!doctors) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Error recovering doctors" });
  }
};