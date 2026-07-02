// src/context/DashboardContext.jsx
// Purpose: Global dashboard state management
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { calculatePlan, savePlan, getPlan, updatePlan } from '../services/dashboardService';
import toast from 'react-hot-toast';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allocations, setAllocations] = useState(null);
  const [userInputs, setUserInputs] = useState({
    salary: '',
    age: '',
    goal: 'Wealth Creation',
    riskProfile: 'Moderate',
    investmentPercentage: 25
  });

  // Fetch user's existing plan
  const fetchPlan = async () => {
    setLoading(true);
    try {
      const data = await getPlan();
      setPlan(data.plan);
      if (data.plan) {
        setAllocations(data.plan.allocations);
        setUserInputs({
          salary: data.plan.salary,
          age: data.plan.age,
          goal: data.plan.goal,
          riskProfile: data.plan.riskProfile,
          investmentPercentage: data.plan.investmentPercentage
        });
      }
    } catch (error) {
      console.error('Error fetching plan:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate new plan
  const calculateNewPlan = async (inputs) => {
    setLoading(true);
    try {
      const data = await calculatePlan(inputs);
      setAllocations(data.allocations);
      setUserInputs(inputs);
      toast.success('Plan calculated successfully!');
      return data;
    } catch (error) {
      toast.error(error.message || 'Failed to calculate plan');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Save plan to database
  const saveUserPlan = async () => {
    setLoading(true);
    try {
      const planData = {
        ...userInputs,
        allocations
      };
      const data = await savePlan(planData);
      setPlan(data.plan);
      toast.success('Plan saved successfully!');
      return data;
    } catch (error) {
      toast.error(error.message || 'Failed to save plan');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update existing plan
  const updateUserPlan = async (newInputs) => {
    setLoading(true);
    try {
      const planData = {
        ...newInputs,
        allocations
      };
      const data = await updatePlan(planData);
      setPlan(data.plan);
      setUserInputs(newInputs);
      toast.success('Plan updated successfully!');
      return data;
    } catch (error) {
      toast.error(error.message || 'Failed to update plan');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    plan,
    loading,
    allocations,
    userInputs,
    setUserInputs,
    fetchPlan,
    calculateNewPlan,
    saveUserPlan,
    updateUserPlan
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider');
  }
  return context;
};