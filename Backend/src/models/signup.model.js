//const { sequelize, Sequelize, Data, SequelizeTypes } = require('sequelize'); Rubish//

const SqlString = require("mysql/lib/protocol/SqlString");

module.exports = (sequelize, Sequelize) => {
    const Signup = sequelize.define("signup", {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
        },
        student_name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        surname:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        gender:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        stud_phone_no:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        stud_email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        Branch:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        Division:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        father_name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        mother_name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        parent_email:{
            type: Sequelize.STRING,
            allowNull: true,
        },
        parent_phone_no:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        year_of_admission:{
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        student_address:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        pincode:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });

    return Signup;
};