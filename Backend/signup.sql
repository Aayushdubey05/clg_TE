CREATE DATABASE IF NOT EXISTS testDB;

USE testDB;

CREATE TABLE IF NOT EXISTS signup (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL,
  surname VARCHAR(100) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  stud_phone_no VARCHAR(15) NOT NULL,
  stud_email VARCHAR(100) NOT NULL UNIQUE,
  branch VARCHAR(50) NOT NULL,
  Division VARCHAR(10) NOT NULL,
  father_name VARCHAR(100) NOT NULL,
  mother_name VARCHAR(100) NOT NULL,
  parent_email VARCHAR(100),
  parent_phone_no VARCHAR(15) NOT NULL,
  year_of_admission YEAR NOT NULL,
  student_address TEXT NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS login(
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
otp VARCHAR(255) NOT NULL,
otp_expiry DATETIME NOT NULL,
createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dashboard (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT UNIQUE,
  admission_documents JSON,
  academic_records JSON,
  FOREIGN KEY (student_id) REFERENCES signup(id) ON DELETE CASCADE
);