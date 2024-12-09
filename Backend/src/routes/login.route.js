const express = require('express');
const loginController = require('../controllers/login.controller');
const Router = express.Router();
Router.post('/generate-otp', async(req, res) => {
    const { email } = req.body;

    try{
        //I have created this because I dont know what features on the frontend side
        // Check if email is registered
        // const isRegistered = await loginController.isEmailRegistered(email);
        // if (!isRegistered) {
        //     return res.status(400).send({ message: 'You need to register' });
        // }
        // still it is there for future implementation

        //generating otp and sending mail of it to users
        const otp = await loginController.generateandStoreOTP(email);
        await loginController.sendOTPEmail(email, otp);

        return res.status(200).send({ message: 'OTP sent successfully' });
    } catch(error){
        return res.status(200).send({ message: 'Error generating otp',error: error.message });
    }
});

//router of logining in
Router.post('/login', async(req, res) => {
    const { email, otp } = req.body;

    try{
        //verify the otp
        const isValid = await loginController.verifyOTP(email, otp);
        if (isValid){
            res.status(200).send({ message : 'Login Successful' });
        }
    } catch(error){
        res.status(401).send({ message: error.message})
    }
});

module.exports = Router;