const express = require("express");
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// Create a new notice
router.post('/', scheduleController.createSchedule);

// Read all notices
router.get('/', scheduleController.readSchedules);

// Update a notice
router.put('/update/:id', scheduleController.updateSchedule);

// Delete a notice
router.delete('/delete/:id', scheduleController.deleteSchedule);

// Get a notice by ID
router.get('/one/:id', scheduleController.getScheduleById);

module.exports = router;