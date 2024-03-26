const sequelize = require('../bdd/database');
const { DataTypes } = require('sequelize');
const userModel = require('./userModel');

const notice = sequelize.define(
    'notice',
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
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
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

module.exports = notice;
