const Calendar = require("../models/calendarModel");

//--------- Create a user ---------//

exports.addCalendar = async (req, res) => {
  try {
    const calendar = req.body;

    await Calendar.create(calendar);

    // Return the Calendar as a response
    res.status(201).json(calendar);
  } catch (error) {
    res.status(500).json({ message: "Error during calendar register" });
  }
};

//--------- Get all users ---------//

exports.getAllCalendars = async (req, res) => {
  try {
    const calendars = await Calendar.findAll();
    res.status(200).json(calendars);
  } catch (error) {
    res.status(500).json({
      message: "Error recovering calendars",
    });
  }
};

//--------- Get a user by id ---------//

exports.getAllById = async (req, res) => {
  const calendarId = req.params.id;
  try {
    const calendar = await Calendar.findByPk(calendarId);
    if (calendar) {
      res.status(200).json(calendar);
    } else {
      res.status(404).json({ message: "Calendar not found" });
    }
  } catch (error) {
    console.error("Error recovering calendar:", error);
    res.status(500).json({ error: "Error recovering calendar" });
  }
};

//--------- Update a user ---------//

exports.updateCalendar = async (req, res) => {
  const calendarId = req.params.id;
  const calendar = req.body;
  try {
    // Check if the user to update exists
    const result = await Calendar.findByPk(calendarId);
    if (result) {
      await result.update(calendar);
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Calendar not found" });
    }
  } catch (error) {
    console.error("Error updating calendar : ", error);
    res.status(500).json({ error: "Error updating calendar" });
  }
};

//--------- Delete a user ---------//

exports.deleteCalendar = async (req, res) => {
  try {
    const calendarId = req.params.id;

    // Check if the user to delete exists
    const calendarToDelete = await Calendar.findByPk(calendarId);
    if (!calendarToDelete) {
      return res.status(404).json({ message: "Calendar not found" });
    }

    // Delete the user from database
    await calendarToDelete.destroy();

    res.status(200).json({ message: "Calendar deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting calendar" });
  }
};
