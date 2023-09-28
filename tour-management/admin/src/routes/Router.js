import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";

import AddTour from "../pages/AddTour";
import ManageTour from "../pages/ManageTour";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      
      <Route path="/add-tours" element={<AddTour />} />
      <Route path="/manage-tours" element={<ManageTour />} />
    </Routes>
  );
};

export default Router;
