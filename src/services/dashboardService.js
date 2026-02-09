// src/services/dashboardService.js
// Purpose: Dashboard-related API calls

import API from './api';

// Calculate investment plan
export const calculatePlan = async (planData) => {
  try {
    const response = await API.post('/dashboard/calculate-plan', planData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to calculate plan' };
  }
};

// Save investment plan
export const savePlan = async (planData) => {
  try {
    const response = await API.post('/dashboard/save-plan', planData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to save plan' };
  }
};

// Get user's saved plan
export const getPlan = async () => {
  try {
    const response = await API.get('/dashboard/get-plan');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch plan' };
  }
};

// Update existing plan
export const updatePlan = async (planData) => {
  try {
    const response = await API.put('/dashboard/update-plan', planData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update plan' };
  }
};

/*
mostly Done 
1. Update Plan Is need to update It => Check routes and Controller Again ..!!
2. calculatePlan endpoint also Check again =>Test Need

*/