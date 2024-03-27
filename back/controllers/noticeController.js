const Notice = require("../models/noticeModel");

// CREATE - Create a new notice
exports.createNotice = async (req, res) => {
  const { name, description, rating, doctorId, userId } = req.body;
  try {
    await Notice.create({ name, description, rating, doctorId, userId });
    res.status(200).json({ message: "New notice created" });
  } catch (error) {
    res.status(500).json({
      message: "Error creating the notice",
      error: error.message,
    });
  }
};

// READ - Read all notices
exports.readNotices = async (req, res) => {
  try {
    const notices = await Notice.findAll();
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({
      message: "Error reading notices:",
      error: error.message,
    });
  }
};

// UPDATE - Update information of a notice
exports.updateNotice = async (req, res) => {
  try {
    const noticeId = req.params.id;
    const noticeToUpdate = await Notice.findByPk(noticeId);
    if (noticeToUpdate) {
      await noticeToUpdate.update(req.body);
      res.status(200).json("Notice updated");
    } else {
      res.status(404).json("Notice not found.");
    }
  } catch (error) {
    res.status(500).json("Error updating notice information");
  }
};

// DELETE - Delete a notice
exports.deleteNotice = async (req, res) => {
  const noticeId = req.params.id;
  try {
    const deletedRowCount = await Notice.destroy({ where: { id: noticeId } });
    if (deletedRowCount > 0) {
      res.status(200).json("Notice deleted successfully.");
    } else {
      res.status(404).json("Notice not found or already deleted.");
    }
  } catch (error) {
    res.status(500).json("Error deleting notice:", error);
  }
};

// GET ONE - Retrieve a notice by its ID
exports.getNoticeById = async (req, res) => {
  const noticeId = req.params.id;
  try {
    const notice = await Notice.findByPk(noticeId);
    if (notice) {
      res.status(200).json(notice);
    } else {
      res.status(404).json({ error: "Notice not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error retrieving notice by ID",
      details: error.message,
    });
  }
};

// GET ONE - by user and doctor id
exports.getNoticeByDoctorUserId = async (req, res) => {
  const userId = req.params.userid;
  const doctorId = req.params.doctorid;

  try {
    const notice = await Notice.findOne(
      {
        userId: userId,
        doctorId: doctorId
      }
    );
    if (notice) {
      res.status(200).json(notice);
    } else {
      res.status(404).json({ error: "Notice not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error retrieving notice by ID",
      details: error.message,
    });
  }
};
