const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const { model } = require('mongoose');


//for creating new student on the dashboard
//commenting the create router because creation of Dashboard has been automated 
//router.post('/create', dashboardController.createDashboard);

//for uploading the documents (admission_card, and all other listed things in models)
router.post('/upload', dashboardController.uploadDocument);

//Get the students dashboard
router.get('/:student_id',dashboardController.getStudentDashboard);

module.exports = router;