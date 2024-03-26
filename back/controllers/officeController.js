const Office = require("../models/officeModel");

// CREATE - Create a new office
exports.createOffice = async (req, res) => {
  const { name, city, address } = req.body;
  try {
    const existingOffice = await Office.findOne({ where: { name: name } });
    if (existingOffice) {
      return res.status(400).json({ message: "This office already exists" });
    }
    await Office.create({ name, city, address });
    res.status(200).json({ message: "New office created" });
  } catch (error) {
    res.status(500).json({
      message: "Error creating the office",
      error: error.message,
    });
  }
};

// READ - Read all offices
exports.readOffices = async (req, res) => {
  try {
    const offices = await Office.findAll();
    res.status(200).json(offices);
  } catch (error) {
    res.status(500).json({
      message: "Error reading offices:",
      error: error.message,
    });
  }
};

// UPDATE - Update information of an office
exports.updateOffice = async (req, res) => {
  try {
    const officeId = req.params.id;
    const officeToUpdate = await Office.findByPk(officeId);
    if (officeToUpdate) {
      await officeToUpdate.update(req.body);
      res.status(200).json("Office updated");
    } else {
      res.status(404).json("Office not found.");
    }
  } catch (error) {
    res.status(500).json("Error updating office information");
  }
};

// DELETE - Delete an office
exports.deleteOffice = async (req, res) => {
  const officeId = req.params.id;
  try {
    const deletedRowCount = await Office.destroy({ where: { id: officeId } });
    if (deletedRowCount > 0) {
      res.status(200).json("Office deleted successfully.");
    } else {
      res.status(404).json("Office not found or already deleted.");
    }
  } catch (error) {
    res.status(500).json("Error deleting office:", error);
  }
};

// GET ONE - Retrieve an office by its ID
exports.getOfficeById = async (req, res) => {
  const officeId = req.params.id;
  try {
    const office = await Office.findByPk(officeId);
    if (office) {
      res.status(200).json(office);
    } else {
      res.status(404).json({ error: "Office not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error retrieving office by ID",
      details: error.message,
    });
  }
};
