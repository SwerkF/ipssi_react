const express = require("express");
const router = express.Router();
const CalendarController = require("../controllers/calendarController");

router.get("/search", CalendarController.getAllCalendars);
router.put("/update/:id", CalendarController.updateCalendar);
router.delete("/delete/:id", CalendarController.deleteCalendar);
router.get("/search/:id", CalendarController.getAllById);
router.post("/add", CalendarController.addCalendar);
router.get("/doctor/:id", CalendarController.getCalendarByDoctorId);


module.exports = router;
