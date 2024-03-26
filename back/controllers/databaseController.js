const sequelize = require("../bdd/database");
const Pet = require("../models/petModel");
const User = require("../models/userModel");
const Calendar = require("../models/calendarModel");

exports.createAllTable = async (req, res) => {
  await sequelize.sync({ alter: true });
  res.status(200).json("Tables créer");
};
