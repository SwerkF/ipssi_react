const express = require("express");
const route = express.Router();
const databaseController = require("../controllers/databaseController");

route.post("/createAllTable", databaseController.createAllTable);

module.exports = route;
