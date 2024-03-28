const sequelize = require('../bdd/database')
const {DataTypes} = require('sequelize')

const Office = require('./officeModel')
const Pet = require('./petModel')

const User = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('admin', 'doctor', 'user'),
            defaultValue: 'user',
            allowNull: true,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'utilisateur.png',
        },
    },
    {
        sequelize,
        freezeTableName: true,
    }
)

User.belongsTo(Office, {
    foreignKey: {
        name: 'officeId',
        allowNull: true,
    },
    as: 'office',
    onDelete: 'CASCADE',
})

User.hasMany(Pet, {
    foreignKey: 'id_owner',
    as: 'pets',
    onDelete: 'CASCADE',
})



module.exports = User
