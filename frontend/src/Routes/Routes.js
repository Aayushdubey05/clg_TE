import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Dashboard from '../Components/Dashboard';
import DataFetcher from '../Components/DataFetcher';
import Profile from '../Components/Profile'; // Make sure this file exists

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/:studentId" element={<Dashboard />} />
        <Route path="/data" element={<DataFetcher />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
