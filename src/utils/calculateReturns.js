// src/utils/calculateReturns.js
// Purpose: Calculate investment returns and projections

// Calculate future value of SIP (Systematic Investment Plan)
export const calculateSIPReturns = (monthlyAmount, years, annualRate) => {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;
  
  const futureValue = monthlyAmount * 
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
  
  const totalInvested = monthlyAmount * months;
  const returns = futureValue - totalInvested;
  
  return {
    futureValue: Math.round(futureValue),
    totalInvested: Math.round(totalInvested),
    returns: Math.round(returns),
    returnPercentage: ((returns / totalInvested) * 100).toFixed(2)
  };
};


// Calculate compound interest
export const calculateCompoundInterest = (principal, years, annualRate) => {
  const amount = principal * Math.pow(1 + annualRate / 100, years);
  const interest = amount - principal;
  
  return {
    maturityAmount: Math.round(amount),
    totalInvested: Math.round(principal),
    interest: Math.round(interest)
  };
};

// Calculate emergency fund needed (6 months of expenses)
export const calculateEmergencyFund = (monthlyExpenses) => {
  return monthlyExpenses * 6;
};

// Calculate retirement corpus needed
export const calculateRetirementCorpus = (currentAge, retirementAge, monthlyExpenses) => {
  const yearsToRetirement = retirementAge - currentAge;
  const yearsInRetirement = 25; // Assuming 25 years in retirement
  
  // Assuming 6% inflation
  const inflationRate = 0.06;
  const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflationRate, yearsToRetirement);
  
  // Total needed for retirement (simplified)
  const totalNeeded = futureMonthlyExpenses * 12 * yearsInRetirement;
  

  return Math.round(totalNeeded);
};

// Project portfolio growth
export const projectPortfolioGrowth = (currentValue, monthlyInvestment, years, expectedReturn) => {
  const projections = [];
  
  for (let year = 1; year <= years; year++) {
    const sipValue = calculateSIPReturns(monthlyInvestment, year, expectedReturn);
    const currentValueGrowth = currentValue * Math.pow(1 + expectedReturn / 100, year);
    const totalValue = sipValue.futureValue + currentValueGrowth;
  
    
    projections.push({
      year,
      value: Math.round(totalValue),
      invested: Math.round(currentValue + (monthlyInvestment * 12 * year))
    });
  }
  
  return projections;
};

/*
Remaining Things 
1. Need to update calculateSIP's
2. Should Update Retirement corpus

*/