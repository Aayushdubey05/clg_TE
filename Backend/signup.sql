CREATE DATABASE IF NOT EXISTS signupdb;

USE signupdb ;

CREATE TABLE IF NOT EXISTS signup (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL,
  surname VARCHAR(100) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  stud_phone_no VARCHAR(15) NOT NULL,
  stud_email VARCHAR(100) NOT NULL,
  branch VARCHAR(50) NOT NULL,
  div VARCHAR(10) NOT NULL,
  father_name VARCHAR(100) NOT NULL,
  mother_name VARCHAR(100) NOT NULL,
  parent_email VARCHAR(100),
  parent_phone_no VARCHAR(15) NOT NULL,
  yearofadmission YEAR NOT NULL,
  student_address TEXT NOT NULL,
  pincode VARCHAR(10) NOT NULL,  
);