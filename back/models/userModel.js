const sequelize = require("../bdd/database");
const { DataTypes } = require("sequelize");

const Office = require("./officeModel");

const User = sequelize.define(
  "user",
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
      type: DataTypes.ENUM("admin", "doctor", "user"),
      defaultValue: "user",
      allowNull: true,
    },
    officeId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: Office,
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
  }
);

module.exports = User;
