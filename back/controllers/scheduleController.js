const Schedule = require("../models/scheduleModel"); // Assurez-vous que le chemin vers votre modèle Schedule est correct
const { Op } = require("sequelize");
const User = require("../models/userModel"); // Supposons que vous avez un modèle pour les utilisateurs
const Pet = require("../models/petModel"); // Supposons que vous avez un modèle pour les animaux
const AppointmentType = require("../models/appointmentTypeModel"); // Supposons que vous avez un modèle pour les types de rendez-vous

// CREATE - Create a new schedule
exports.createSchedule = async (req, res) => {
  const {
    date,
    city,
    address,
    status,
    doctorId,
    appointmentTypeId,
    petId,
    userId,
  } = req.body;
  try {
    await Schedule.create({
      date,
      city,
      address,
      status,
      doctorId,
      appointmentTypeId,
      petId,
      userId,
    });
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
    const deletedRowCount = await Schedule.destroy({
      where: { id: scheduleId },
    });
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

exports.getSchedulesOfUser = async (req, res) => {
  const { date, userId } = req.body;

  try {
    const schedules = await Schedule.findAll({
      where: {
        userId: userId,
        date: { [Op.gte]: date },
      },
    });
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({
      message: "Error reading schedules:",
      error: error.message,
    });
  }
};

exports.getAllSchedulesOfUser = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  try {
    const schedules = await Schedule.findAll({
      where: {
        userId: userId,
      },
    });

    console.log(schedules);
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({
      message: "Error reading schedules:",
      error: error.message,
    });
  }
};

exports.getSchedulesOfDoctor = async (req, res) => {
  const { date, userId } = req.body;

  try {
    const schedules = await Schedule.findAll({
      where: {
        doctorId: userId,
        date: { [Op.gte]: date },
      },
    });
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({
      message: "Error reading schedules:",
      error: error.message,
    });
  }
};
