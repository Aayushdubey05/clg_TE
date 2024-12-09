const express = require('express');
const cors = require('cors');
//const { Signup } = require('../models/signup.model.js');
const db = require("../models")
const signup = db.signup;
const Op = db.Sequelize.Op;

//function to create new user 
exports.create = (req, res) => {
    if(!req.body.student_name || !req.body.gender || !req.body.stud_phone_no
        || !req.body.stud_email || !req.body.Branch || !req.body.Division 
        || !req.body.father_name || !req.body.mother_name || !req.body.parent_phone_no 
        || !req.body.year_of_admission || !req.body.pincode || !req.body.surname || !req.body.student_address){
            res.status(400).send({
                message: "Content can not be empty!"
              });
              return;
    }

    const user = {
        student_name: req.body.student_name,
        surname: req.body.surname,
        gender: req.body.gender,
        stud_phone_no: req.body.stud_phone_no,
        stud_email: req.body.stud_email,
        Branch: req.body.Branch,
        Division: req.body.Division,
        father_name: req.body.father_name,
        mother_name: req.body.mother_name,
        parent_email: req.body.parent_email,
        parent_phone_no: req.body.parent_phone_no,
        year_of_admission: req.body.year_of_admission,
        student_address: req.body.student_address,
        pincode: req.body.pincode
    }


    signup.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error("Error creating user:", err);
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};

//function to retireve all the users (to update in future)
// exports.findAll = (req , res) => {

// };

// //functon to find single user with an id  (for further updates)
// exports.findOne = (req , res) => {

// };

// //function to update a user details (for further updates)
// exports.update = (req, res) => {

// };

// //function to delete a specific user (for further updates in future)
// exports.delete = (req, res) => {

// };

// //function to delete all the users (for further updates in future)
// exports.deleteAll = (req, res) => {

// };

// //function to all see all the users (for further updates in future)
// exports.findAllUsers = (req, res) => {

// };



