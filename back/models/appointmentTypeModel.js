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
        },
    {
        sequelize,
        freezeTableName: true,
    }
)

AppointmentType.belongsTo(User, { foreignKey: 'doctorId' });

module.exports = AppointmentType;
