const express = require("express");
const route = express.Router();
const databaseController = require("../controllers/databaseController");

route.post("/createAllTable", databaseController.createAllTable);
route.post("/initialized", databaseController.initialized);

module.exports = route;
