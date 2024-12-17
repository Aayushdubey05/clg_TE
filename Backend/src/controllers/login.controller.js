const express = require('express');
const cors = require('cors');
const db = require('../models');
const login = db.login;
const signup = db.signup;
const Op = db.Sequelize.Op;
const nodemailer = require('nodemailer');


//configuring the nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',// Use any other mail domain e.g Yahoo, onedrive
    auth: {
        user: 'dubeyaayush333@gmail.com',//Configure this with main email id
        pass: 'Ayush@4451',//configure this with main email id password
    }
})

//Code for generating OTP
function generateOTP(){
    return Math.floor(100000+ Math.random() * 900000).toString();
}

// Function to check if email is registered
async function isEmailRegistered(email) {
    const registeredUser = await signup.findOne({ where: { email } });
    return !!registeredUser;
}

async function generateandStoreOTP(email){
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5*60*100);

    await login.upsert({
        email,
        otp,
        otp_expiry: otpExpiry,
    });

    console.log(`OTP for ${email}: ${otp}`);
} 


async function sendOTPEmail(email, otp){
    const mailOptions = {
        from: 'dubeyaayush333@gmail.com',
        to: email,
        subject: 'YOUR OTP CODE',
        text: `Your OTP code is ${otp}. it will expire in 5 minutes`,
    };
    await transporter.sendMail(mailOptions);
} 


async function verifyOTP(email, otp){
    const user = await login.findOne({ where: { email }});
    if(!user){
        throw new Error(`User not found`);
    }

    if(user.otp === otp && new Date() < new Date(user.otp_expiry)){
        return true;
    } else {
        throw new Error('Invalid OTP');
    }
}

module.exports = {
    generateandStoreOTP,
    isEmailRegistered, //this will import export the functions
    sendOTPEmail,
    verifyOTP,
};