const sequelize = require('../bdd/database')
const {DataTypes} = require('sequelize')
const User = require('./userModel')

const AppointmentType = sequelize.define(
    'appointmentType',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        prize: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        doctorId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: User,
              key: "id",
            },
          },
    },
    {
        sequelize,
        freezeTableName: true,
    }
)

module.exports = AppointmentType;
