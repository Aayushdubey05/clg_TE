const express = require('express');
const signupController = require('../controllers/signup.controller');

const router = express.Router();

router.post('/signup',signupController.create); //This route for signups

module.exports = router;