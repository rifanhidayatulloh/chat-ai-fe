import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';
import Home from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../components/accounts/Login';
import Register from '../components/accounts/Register';
import Profile from '../components/accounts/Profile';
import ErrorMessage from '../components/layouts/errorMessage';
import Navbar from '../components/layouts/Navbar';
import PrivateRoute from '../utils/PrivateRoute';

const router = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ErrorMessage />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default router;
