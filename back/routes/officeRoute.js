const express = require("express");
const router = express.Router();
const officeController = require('../controllers/officeController');

// Create a new notice
router.post('/', officeController.createOffice);

// Read all notices
router.get('/', officeController.readOffices);

// Update a notice
router.put('/update/:id', officeController.updateOffice);

// Delete a notice
router.delete('/delete/:id', officeController.deleteOffice);

// Get a notice by ID
router.get('/one/:id', officeController.getOfficeById);

module.exports = router;