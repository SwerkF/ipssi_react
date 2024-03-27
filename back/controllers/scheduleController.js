const Schedule = require("../models/scheduleModel");

// CREATE - Create a new schedule
exports.createSchedule = async (req, res) => {
  const { date, city, address, status, doctorId, appointmentTypeId, petId } = req.body;
  try {
    await Schedule.create({ date, city, address, status, doctorId, appointmentTypeId, petId });
    res.status(200).json({ message: "New schedule created" });
  } catch (error) {
    res.status(500).json({
      message: "Error creating the schedule",
      error: error.message,
    });
  }
};

// READ - Read all schedules
exports.readSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({
      message: "Error reading schedules:",
      error: error.message,
    });
  }
};

// UPDATE - Update information of a schedule
exports.updateSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const scheduleToUpdate = await Schedule.findByPk(scheduleId);
    if (scheduleToUpdate) {
      await scheduleToUpdate.update(req.body);
      res.status(200).json("Schedule updated");
    } else {
      res.status(404).json("Schedule not found.");
    }
  } catch (error) {
    res.status(500).json("Error updating schedule information");
  }
};

// DELETE - Delete a schedule
exports.deleteSchedule = async (req, res) => {
  const scheduleId = req.params.id;
  try {
    const deletedRowCount = await Schedule.destroy({ where: { id: scheduleId } });
    if (deletedRowCount > 0) {
      res.status(200).json("Schedule deleted successfully.");
    } else {
      res.status(404).json("Schedule not found or already deleted.");
    }
  } catch (error) {
    res.status(500).json("Error deleting schedule:", error);
  }
};

// GET ONE - Retrieve a schedule by its ID
exports.getScheduleById = async (req, res) => {
  const scheduleId = req.params.id;
  try {
    const schedule = await Schedule.findByPk(scheduleId);
    if (schedule) {
      res.status(200).json(schedule);
    } else {
      res.status(404).json({ error: "Schedule not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error retrieving schedule by ID",
      details: error.message,
    });
  }
};