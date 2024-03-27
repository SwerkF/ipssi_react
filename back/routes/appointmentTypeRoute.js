const express = require('express');
const router = express.Router();
const appointmentTypeController = require('../controllers/appointmentTypeController');

// Create a new appointment type
router.post('/', appointmentTypeController.createAppointmentType);

// Read all appointment type
router.get('/', appointmentTypeController.readAppointmentTypes);

// Update a appointment type
router.put('/update/:id', appointmentTypeController.updateAppointmentType);

// Delete a appointment type
router.delete('/delete/:id', appointmentTypeController.deleteAppointmentType);

// Get a appointment type by ID
router.get('/one/:id', appointmentTypeController.getAppointmentTypeById);

// Get a appointments by doctorid
router.get('/doctor/:id', appointmentTypeController.getAppointmentsByDoctorId);

module.exports = router;