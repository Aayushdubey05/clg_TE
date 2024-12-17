const express = require('express');
const signupController = require('../controllers/signup.controller');
const upload = require('../middleware/upload.middleware');

const router = express.Router();

router.post('/',upload.single('image'),signupController.create); //This route for signups
module.exports = router;