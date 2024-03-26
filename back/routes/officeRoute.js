const express = require("express");
const router = express.Router();
const officeController = require("../controllers/officeController");

// Create a new office
router.post("/add", officeController.createOffice);

// Read all offices
router.get("/", officeController.readOffices);

// Update a office
router.put("/update/:id", officeController.updateOffice);

// Delete a office
router.delete("/delete/:id", officeController.deleteOffice);

// Get a office by ID
router.get("/one/:id", officeController.getOfficeById);

module.exports = router;
