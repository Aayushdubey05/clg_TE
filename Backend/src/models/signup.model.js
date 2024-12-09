//const { sequelize, Sequelize, Data, SequelizeTypes } = require('sequelize'); Rubish//

module.exports = (sequelize, Sequelize) => {
    const Signup = sequelize.define("signup", {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
        },
        student_name:{
            type: Sequelize.STRING,
            allownull: false,
        },
        surname:{
            type: Sequelize.STRING,
            allownull: false,
        },
        gender:{
            type: Sequelize.STRING,
            allownull: false,
        },
        stud_phone_no:{
            type: Sequelize.STRING,
            allownull: false,
        },
        stud_email:{
            type: Sequelize.STRING,
            allownull: false,
            unique: true,
        },
        Branch:{
            type: Sequelize.STRING,
            allownull:false,
        },
        Division:{
            type: Sequelize.STRING,
            allownull:false,
        },
        father_name:{
            type: Sequelize.STRING,
            allownull:false,
        },
        mother_name:{
            type: Sequelize.STRING,
            allownull:false,
        },
        parent_email:{
            type: Sequelize.STRING,
            allownull:true,
        },
        parent_phone_no:{
            type: Sequelize.STRING,
            allownull:false,
        },
        year_of_admission:{
            type: Sequelize.DATEONLY,
            allownull:false,
        },
        student_address:{
            type: Sequelize.STRING,
            allownull:false,
        },
        pincode:{
            type: Sequelize.STRING,
            allownull:false,
        }
    });

    return Signup;
};