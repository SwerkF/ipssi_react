const sequelize = require("../bdd/database");
const { DataTypes } = require("sequelize");
const User = require("./userModel");

const Calendar = sequelize.define(
  "calendar",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    lunchBreakEndedAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    lunchBreakStartedAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    isWorkingOnSunday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isWorkingOnMonday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isWorkingOnTuesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isWorkingOnWednesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isWorkingOnThursday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isWorkingOnFriday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isWorkingOnSaturday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    startWorkAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    endWorkAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    
  },
  {
    sequelize,
    freezeTableName: true,
  }
);

Calendar.belongsTo(User, { foreignKey: "userId" });

module.exports = Calendar;
