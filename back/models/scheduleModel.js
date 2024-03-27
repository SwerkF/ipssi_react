const sequelize = require('../bdd/database');
const { DataTypes } = require('sequelize');
const appointmentTypeModel = require('./appointmentTypeModel');
const userModel = require('./userModel');
const petModel = require('./petModel');

const schedule = sequelize.define(
    'schedule',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("booked", "canceled", "finished"),
            allowNull: false,
        },
        doctorId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: userModel,
                key: "id",
            },
        },
        appointmentTypeId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: appointmentTypeModel,
                key: "id",
            },
        },
        petId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: petModel,
                key: "id",
            },
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: userModel,
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
    }
)

module.exports = schedule;
