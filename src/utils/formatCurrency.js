// src/utils/formatCurrency.js
// Purpose: Format numbers to Indian currency format (₹)

// Format number to Indian Rupee format
export const formatCurrency = (amount) => {
  if (!amount && amount !== 0) return '₹0';
  
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};


// Format to compact notation (e.g., ₹1.5L, ₹2.3Cr)
export const formatCompactCurrency = (amount) => {
  if (!amount && amount !== 0) return '₹0';
  
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)}Cr`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(1)}K`;
  }
  
  return `₹${amount.toLocaleString('en-IN')}`;
};


// Format without currency symbol
export const formatNumber = (num) => {
  if (!num && num !== 0) return '0';
  return num.toLocaleString('en-IN');
};

// Format percentage
export const formatPercentage = (value) => {
  if (!value && value !== 0) return '0%';
  return `${value.toFixed(1)}%`;
};



/*
Remaining Things 
1. Notations Updates Need
Nothing 
*/