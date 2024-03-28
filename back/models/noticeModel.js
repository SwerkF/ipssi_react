const sequelize = require('../bdd/database');
const { DataTypes } = require('sequelize');
const User = require('./userModel');

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
    },
    {
        sequelize,
        freezeTableName: true,
    }
);

notice.belongsTo(User, { foreignKey: 'userId' });
notice.belongsTo(User, { foreignKey: 'doctorId' });

module.exports = notice;
