const express = require("express");
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// Create a new schedule
router.post('/', scheduleController.createSchedule);

// Read all schedules
router.get('/', scheduleController.readSchedules);

// Update a schedule
router.put('/update/:id', scheduleController.updateSchedule);

// Delete a schedule
router.delete('/delete/:id', scheduleController.deleteSchedule);

// Get a schedule by ID
router.get('/one/:id', scheduleController.getScheduleById);

router.post('/user', scheduleController.getSchedulesOfUser);

router.post('/doctor', scheduleController.getSchedulesOfDoctor);


module.exports = router;