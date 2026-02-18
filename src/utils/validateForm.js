// src/utils/validateForm.js
// Purpose: Form validation helper functions

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate password strength
export const validatePassword = (password) => {
  if (password.length <= 6) {
    return { valid: false, message: 'Password must be at least 6 characters' };
  }
  return { valid: true, message: '' };
};

// Validate salary input
export const validateSalary = (salary) => {
  const amount = Number(salary);
  if (!amount || amount < 10000) {
    return { valid: false, message: 'Salary must be at least ₹10,000' };
  }
  if (amount > 10000000) {
    return { valid: false, message: 'Salary seems too high. Please check.' };
  }
  return { valid: true, message: '' };
};

// Validate age input
export const validateAge = (age) => {
  const ageNum = Number(age);
  if (!ageNum || ageNum < 18) {
    return { valid: false, message: 'Age must be at least 18' };
  }
  if (ageNum > 70) {
    return { valid: false, message: 'Age must be below 70' };
  }
  return { valid: true, message: '' };
};

// Validate investment percentage
export const validateInvestmentPercentage = (percentage) => {
  const percent = Number(percentage);
  if (!percent || percent < 5) {
    return { valid: false, message: 'Investment must be at least 5%' };
  }
  if (percent > 70) {
    return { valid: false, message: 'Investment cannot exceed 70%' };
  }
  return { valid: true, message: '' };
};


/*
Remaining Things 
1. Name Validation 
2. It should Display Message wht shoudl validate
3.  
*/