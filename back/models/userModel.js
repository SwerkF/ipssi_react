const sequelize = require('../bdd/database')
const {DataTypes} = require('sequelize')

const Office = require('./officeModel')
const Pet = require('./petModel')
const AppointmentType = require('./appointmentTypeModel')


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

Pet.belongsTo(User, {
    foreignKey: 'id_owner',
    as: 'owner',
    onDelete: 'CASCADE',
});

User.hasMany(AppointmentType, {
    foreignKey: 'doctorId',
    as: 'doctorAppointments', // Unique alias for doctor appointments
    onDelete: 'CASCADE',
});

User.hasMany(AppointmentType, {
    foreignKey: 'userId',
    as: 'userAppointments', // Unique alias for user appointments
    onDelete: 'CASCADE',
});

AppointmentType.belongsTo(User, {
    foreignKey: 'doctorId',
    as: 'doctor', // Alias for the doctor association
    onDelete: 'CASCADE',
});

AppointmentType.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user', // Alias for the user association
    onDelete: 'CASCADE',
});




module.exports = User
