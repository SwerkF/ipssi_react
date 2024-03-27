const AppointmentType = require("../models/appointmentTypeModel");

// CREATE - Create a new appointment type
exports.createAppointmentType = async (req, res) => {
  const { prize, name, duration, doctorId } = req.body;
  try {
    await AppointmentType.create({ prize, name, duration, doctorId });
    res.status(200).json({ message: "New appointment type created" });
  } catch (error) {
    res.status(500).json({
      message: "Error creating the appointment type",
      error: error.message,
    });
  }
};

// READ - Read all appointment types
exports.readAppointmentTypes = async (req, res) => {
  try {
    const appointmentTypes = await AppointmentType.findAll();
    res.status(200).json(appointmentTypes);
  } catch (error) {
    res.status(500).json({
      message: "Error reading appointment types:",
      error: error.message,
    });
  }
};

// UPDATE - Update information of an appointment type
exports.updateAppointmentType = async (req, res) => {
  try {
    const appointmentTypeId = req.params.id;
    const appointmentTypeToUpdate = await AppointmentType.findByPk(appointmentTypeId);
    if (appointmentTypeToUpdate) {
      await appointmentTypeToUpdate.update(req.body);
      res.status(200).json("Appointment type updated");
    } else {
      res.status(404).json("Appointment type not found.");
    }
  } catch (error) {
    res.status(500).json("Error updating appointment type information");
  }
};

// DELETE - Delete an appointment type
exports.deleteAppointmentType = async (req, res) => {
  const appointmentTypeId = req.params.id;
  try {
    const deletedRowCount = await AppointmentType.destroy({ where: { id: appointmentTypeId } });
    if (deletedRowCount > 0) {
      res.status(200).json("Appointment type deleted successfully.");
    } else {
      res.status(404).json("Appointment type not found or already deleted.");
    }
  } catch (error) {
    res.status(500).json("Error deleting appointment type:", error);
  }
};

// GET ONE - Retrieve an appointment type by its ID
exports.getAppointmentTypeById = async (req, res) => {
  const appointmentTypeId = req.params.id;
  try {
    const appointmentType = await AppointmentType.findByPk(appointmentTypeId);
    if (appointmentType) {
      res.status(200).json(appointmentType);
    } else {
      res.status(404).json({ error: "Appointment type not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error retrieving appointment type by ID",
      details: error.message,
    });
  }
};

// GET ONE - Retrieve an appointment type by its ID
exports.getAppointmentsByDoctorId = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const appointmentType = await AppointmentType.findOne({
      where: {
        doctorId: doctorId
      }
    });
    if (appointmentType) {
      res.status(200).json(appointmentType);
    } else {
      res.status(404).json({ error: "Appointment type not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error retrieving appointment type by ID",
      details: error.message,
    });
  }
};
