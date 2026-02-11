// src/services/api.js
// Purpose: Axios configuration with base URL and JWT token interceptor

import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`, // Your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add JWT token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default API;


/*
Remaining Things 
1.Add refresh token logic
2.Convert this to TypeScript
3.Show multiple Axios instances pattern
4.Review it from a security auditor mindset
5. BaseUrL HardCoded
*/