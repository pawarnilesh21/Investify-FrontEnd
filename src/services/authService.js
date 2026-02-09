// src/services/authService.js
// Purpose: Authentication API calls (Signup, Login, Logout)

import API from './api';

// Signup user
export const signup = async (userData) => {
  try {
    const response = await API.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Signup failed' };
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    
    // Store token in localStorage
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      
      // Store user data
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
    }
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/login';
};

// Get current user from localStorage
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};


/*  requr
 .1. Move auth logic to AuthContext
2.  Add refresh token flow
 3. Switch to httpOnly cookies
 4.Mock authService for tests
 5.Validate JWT expiry (decode + check exp)
6.Track auth failures (security)
*/
