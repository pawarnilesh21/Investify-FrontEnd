// src/pages/dashboard/Dashboard.jsx
// Purpose: Main dashboard page - orchestrates all components

import { useState, useEffect } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import Navbar from '../../components/common/Navbar';
import Loader from '../../components/common/Loader';
import HeroSection from '../../components/dashboard/HeroSection';
import InputForm from '../../components/dashboard/InputForm';
import SuggestionSlider from '../../components/dashboard/SuggestionSlider';
import AllocationPie from '../../components/dashboard/AllocationPie';
import CategoryCard from '../../components/dashboard/CategoryCard';
import StockTable from '../../components/dashboard/StockTable';
import MutualFundTable from '../../components/dashboard/MutualFundTable';
import InsightsCard from '../../components/dashboard/InsightsCard';
import ActionButtons from '../../components/dashboard/ActionButtons';
import toast from 'react-hot-toast';
import { getStockRecommendations, getMutualFundRecommendations } from '../../services/recommendationService';
import jsPDF from 'jspdf';

const Dashboard = () => {
  const { 
    plan, 
    loading, 
    allocations, 
    userInputs, 
    fetchPlan, 
    calculateNewPlan, 
    saveUserPlan 
  } = useDashboard();

  const [step, setStep] = useState(1); // 1: Form, 2: Slider, 3: Results
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState({
    stocks: [],
    mutualFunds: []
  });
  const [loadingRecs, setLoadingRecs] = useState(false);

  useEffect(() => {
    fetchPlan();
  }, []);

  useEffect(() => {
    if (plan) {
      setStep(3); // Show results if plan exists
    }
  }, [plan]);

  // Step 1: Handle form submission
  const handleFormSubmit = async (formData) => {
    try {
      await calculateNewPlan(formData);
      setStep(2); // Move to slider
    } catch (error) {
      toast.error('Failed to calculate plan');
    }
  };

  // Step 2: Handle slider confirmation
  const handleSliderConfirm = async (percentage, amount) => {
    try {
      const updatedInputs = {
        ...userInputs,
        investmentPercentage: percentage
      };
      await calculateNewPlan(updatedInputs);
      setStep(3); // Move to results
      
      // Fetch recommendations
      fetchRecommendations();
    } catch (error) {
      toast.error('Failed to generate allocation');
    }
  };

  // Fetch recommendations
  const fetchRecommendations = async () => {
    if (!allocations) return;
    
    setLoadingRecs(true);
    try {
      const [stocksData, fundsData] = await Promise.all([
        getStockRecommendations(allocations.stocks?.amount || 0, userInputs.riskProfile),
        getMutualFundRecommendations(allocations.mutualFunds?.amount || 0, userInputs.riskProfile)
      ]);

      setRecommendations({
        stocks: stocksData.stocks || [],
        mutualFunds: fundsData.funds || []
      });
      setShowRecommendations(true);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      toast.error('Failed to load recommendations');
    } finally {
      setLoadingRecs(false);
    }
  };

  // Save plan
  const handleSavePlan = async () => {
    try {
    
      await saveUserPlan();
      toast.success('Plan saved successfully!');
    }
       catch (error) {
      toast.error('Failed to save plan');
    }
  };

  // Export PDF
  const handleExportPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Investify - Investment Plan', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Salary: ₹${userInputs.salary}`, 20, 40);
    doc.text(`Age: ${userInputs.age}`, 20, 50);
    doc.text(`Goal: ${userInputs.goal}`, 20, 60);
    doc.text(`Investment: ${userInputs.investmentPercentage}%`, 20, 70);
    
    doc.text('Allocation:', 20, 90);
    if (allocations) {
      doc.text(`Stocks: ₹${allocations.stocks?.amount}`, 30, 100);
      doc.text(`Mutual Funds: ₹${allocations.mutualFunds?.amount}`, 30, 110);
      doc.text(`SIP: ₹${allocations.sip?.amount}`, 30, 120);
      doc.text(`Gold: ₹${allocations.gold?.amount}`, 30, 130);
      doc.text(`Insurance: ₹${allocations.insurance?.amount}`, 30, 140);
    }
    
    doc.save('investify-plan.pdf');
    toast.success('PDF downloaded!');
  };
  // Modify plan
  const handleModifyPlan = () => {
    setStep(1);
    setShowRecommendations(false);
  };
  if (loading) {
    return <Loader fullScreen />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Step 1: Input Form */}
        {step === 1 && (
          <>
            <HeroSection />
            <InputForm onSubmit={handleFormSubmit} initialValues={userInputs} />
          </>
        )}

        {/* Step 2: Suggestion Slider */}
        {step === 2 && (
          <>
            <HeroSection />
            <SuggestionSlider 
              salary={userInputs.salary}
              suggestedPercentage={25}
              onConfirm={handleSliderConfirm}
            />
          </>
        )}

        {/* Step 3: Results */}
        {step === 3 && allocations && (
          <>
            <HeroSection 
              totalInvestment={(userInputs.salary * userInputs.investmentPercentage) / 100}
              portfolioValue={0}
              expectedReturns={12}
            />

            {/* Allocation Pie Chart */}
            <div className="mb-8">
              <AllocationPie allocations={allocations} />
            </div>

            {/* Category Cards */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Investment Categories</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CategoryCard
                  icon="📈"
                  category="Stocks"
                  amount={allocations.stocks?.amount || 0}
                  percentage={allocations.stocks?.percentage || 0}
                  color="purple"
                  onClick={() => fetchRecommendations()}
                />
                <CategoryCard
                  icon="💼"
                  category="Mutual Funds"
                  amount={allocations.mutualFunds?.amount || 0}
                  percentage={allocations.mutualFunds?.percentage || 0}
                  color="pink"
                  onClick={() => fetchRecommendations()}
                />
                <CategoryCard
                  icon="💰"
                  category="SIP"
                  amount={allocations.sip?.amount || 0}
                  percentage={allocations.sip?.percentage || 0}
                  color="green"
                />
                <CategoryCard
                  icon="🪙"
                  category="Gold"
                  amount={allocations.gold?.amount || 0}
                  percentage={allocations.gold?.percentage || 0}
                  color="yellow"
                />
                <CategoryCard
                  icon="🛡️"
                  category="Insurance"
                  amount={allocations.insurance?.amount || 0}
                  percentage={allocations.insurance?.percentage || 0}
                  color="blue"
                />
              </div>
            </div>

            {/* Recommendations */}
            {showRecommendations && !loadingRecs && (
              <div className="space-y-8 mb-8">
                <StockTable 
                  stocks={recommendations.stocks} 
                  budget={allocations.stocks?.amount || 0} 
                />
                <MutualFundTable 
                  funds={recommendations.mutualFunds} 
                  budget={allocations.mutualFunds?.amount || 0} 
                />
              </div>
            )}


            {loadingRecs && (
              <div className="text-center py-8">
                <Loader />
                <p className="text-gray-400 mt-4">Loading recommendations...</p>
              </div>
            )}


            {/* Insights */}
            <div className="mb-8">
              <InsightsCard allocations={allocations} userInputs={userInputs} />
            </div>

            {/* Actions */}
            <ActionButtons
              onSave={handleSavePlan}
              onExport={handleExportPDF}
              onModify={handleModifyPlan}
              onStartInvesting={() => toast.success('Feature coming soon!')}
              loading={loading}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;




/*
1 PDF + recommendations into hooks/utils
2.Introduce step constants
3.Add lazy loading

4.Split dashboard into DashboardContainer + DashboardView
5.Create useRecommendations hook
6. quickActions improments Need

*/

