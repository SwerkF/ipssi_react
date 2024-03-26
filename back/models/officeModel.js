const sequelize = require('../bdd/database')
const {DataTypes} = require('sequelize')

const office = sequelize.define(
    'office',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
    }
)

module.exports = office;
