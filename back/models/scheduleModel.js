const sequelize = require('../bdd/database');
const {DataTypes} = require('sequelize');
const appointmentTypeModel = require('./appointmentTypeModel');
const User = require('./userModel');
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
            type: DataTypes.ENUM('booked', 'canceled', 'finished'),
            allowNull: false,
            defaultValue: 'booked',
        },
    },
    {
        sequelize,
        freezeTableName: true,
    }
);

schedule.belongsTo(User, {foreignKey: 'userId'});
schedule.belongsTo(User, {foreignKey: 'doctorId'});
schedule.belongsTo(appointmentTypeModel, {foreignKey: 'appointmentTypeId'});
schedule.belongsTo(petModel, {foreignKey: 'petId'});

module.exports = schedule;
