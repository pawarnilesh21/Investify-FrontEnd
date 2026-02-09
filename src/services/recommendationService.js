// src/services/recommendationService.js
// Purpose: Fetch investment recommendations (Stocks, MF, Gold, Insurance)

import API from './api';

// Get stock recommendations
export const getStockRecommendations = async (budget, riskProfile) => {
  try {
    const response = await API.get('/recommendations/stocks', {
      params: { budget, riskProfile }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch stock recommendations' };
  }
};

// Get mutual fund recommendations
export const getMutualFundRecommendations = async (budget, riskProfile) => {
  try {
    const response = await API.get('/recommendations/mutual-funds', {
      params: { budget, riskProfile }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch mutual fund recommendations' };
  }
};

// Get SIP recommendations
export const getSIPRecommendations = async (budget, riskProfile) => {
  try {
    const response = await API.get('/recommendations/sip', {
      params: { budget, riskProfile }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch SIP recommendations' };
  }
};

// Get gold recommendations
export const getGoldRecommendations = async (budget) => {
  try {
    const response = await API.get('/recommendations/gold', {
      params: { budget }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch gold recommendations' };
  }
};

// Get insurance recommendations
export const getInsuranceRecommendations = async (age, salary) => {
  try {
    const response = await API.post('/recommendations/insurance', { age, salary });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch insurance recommendations' };
  }
};


/*
reqirr
1.sipRecommendations => should accept Timeline also With Return  
2. getInsuranceRecommendations from another apies=> yahooFinaance Check again 

*/