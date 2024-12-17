const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const upload = require('../middleware/upload.middleware');

// For uploading the documents (admission_card, and all other listed things in models)
router.post('/upload', upload.single('admission_card'), dashboardController.uploadDocument);

// Get the student's dashboard
router.get('/:student_id', dashboardController.getStudentDashboard);

module.exports = router;