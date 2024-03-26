const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController');

// Create a new notice
router.post('/', noticeController.createNotice);

// Read all notices
router.get('/', noticeController.readNotices);

// Update a notice
router.put('/update/:id', noticeController.updateNotice);

// Delete a notice
router.delete('/delete/:id', noticeController.deleteNotice);

// Get a notice by ID
router.get('/one/:id', noticeController.getNoticeById);

module.exports = router;