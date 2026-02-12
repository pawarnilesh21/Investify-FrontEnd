// frontend/src/pages/dashboard/SipCalculator.jsx
// Purpose: SIP and Lumpsum calculator - Main component

import { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import SliderInput from '../../components/dashboard/SliderInput';
import SipChart from '../../components/dashboard/SipChart';
import SipResults from '../../components/dashboard/SipResults';
import SipInfo from '../../components/dashboard/SipInfo';

const SipCalculator = () => {
  const [calculatorMode, setCalculatorMode] = useState('SIP'); // 'SIP' or 'Lumpsum'
  
  // SIP State
  const [sipData, setSipData] = useState({
    monthlyInvestment: 25000,
    returnRate: 12,
    timePeriod: 10
  });

  // Lumpsum State
  const [lumpSumData, setLumpSumData] = useState({
    totalInvestment: 100000,
    returnRate: 12,
    timePeriod: 5
  });

  // Calculate SIP Returns
  const calculateSIP = () => {
    const { monthlyInvestment, returnRate, timePeriod } = sipData;
    
    // Convert annual return to monthly return (proper compounding)
    const monthlyRate = Math.pow(1 + returnRate / 100, 1 / 12) - 1;
    const months = timePeriod * 12;
    
    // SIP Future Value Formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
    const futureValue = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const investedAmount = monthlyInvestment * months;
    const estimatedReturns = futureValue - investedAmount;
    
    return {
      investedAmount: Math.round(investedAmount),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue)
    };
  };

  // Calculate Lumpsum Returns
  const calculateLumpsum = () => {
    const { totalInvestment, returnRate, timePeriod } = lumpSumData;
    
    // Lumpsum Future Value Formula: FV = PV × (1 + r)^n
    const futureValue = totalInvestment * Math.pow(1 + returnRate / 100, timePeriod);
    const estimatedReturns = futureValue - totalInvestment;
    
    return {
      investedAmount: totalInvestment,
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue)
    };
  };

  const results = calculatorMode === 'SIP' ? calculateSIP() : calculateLumpsum();

  // Format currency for display (without ₹ symbol for input)
  const formatNumber = (num) => {
    return num.toLocaleString('en-IN');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🧮 SIP Calculator</h1>
          <p className="text-gray-400">Calculate returns on your Systematic Investment Plan</p>
        </div>

        {/* Calculator Card */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-2xl mb-8">
          
          {/* Mode Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setCalculatorMode('SIP')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                calculatorMode === 'SIP'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white border border-purple-500/30'
              }`}
            >
              SIP
            </button>
            <button
              onClick={() => setCalculatorMode('Lumpsum')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                calculatorMode === 'Lumpsum'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white border border-purple-500/30'
              }`}
            >
              Lumpsum
            </button>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left Side - Inputs */}
            <div className="space-y-6">
              
              {calculatorMode === 'SIP' ? (
                <>
                  {/* Monthly Investment */}
                  <SliderInput
                    label="Monthly Investment"
                    value={sipData.monthlyInvestment}
                    onChange={(val) => setSipData({ ...sipData, monthlyInvestment: val })}
                    min={100}
                    max={1000000}
                    step={1}
                    prefix="₹"
                    formatValue={formatNumber}
                  />

                  {/* Expected Return Rate */}
                  <SliderInput
                    label="Expected Return Rate (p.a)"
                    value={sipData.returnRate}
                    onChange={(val) => setSipData({ ...sipData, returnRate: val })}
                    min={1}
                    max={30}
                    step={0.1}
                    suffix="%"
                  />

                  {/* Time Period */}
                  <SliderInput
                    label="Time Period"
                    value={sipData.timePeriod}
                    onChange={(val) => setSipData({ ...sipData, timePeriod: val })}
                    min={1}
                    max={40}
                    step={1}
                    suffix=" Yr"
                  />
                </>
              ) : (
                <>
                  {/* Total Investment */}
                  <SliderInput
                    label="Total Investment"
                    value={lumpSumData.totalInvestment}
                    onChange={(val) => setLumpSumData({ ...lumpSumData, totalInvestment: val })}
                    min={1000}
                    max={10000000}
                    step={1}
                    prefix="₹"
                    formatValue={formatNumber}
                  />

                  {/* Expected Return Rate */}
                  <SliderInput
                    label="Expected Return Rate (p.a)"
                    value={lumpSumData.returnRate}
                    onChange={(val) => setLumpSumData({ ...lumpSumData, returnRate: val })}
                    min={1}
                    max={30}
                    step={0.1}
                    suffix="%"
                  />

                  {/* Time Period */}
                  <SliderInput
                    label="Time Period"
                    value={lumpSumData.timePeriod}
                    onChange={(val) => setLumpSumData({ ...lumpSumData, timePeriod: val })}
                    min={1}
                    max={40}
                    step={1}
                    suffix=" Yr"
                  />
                </>
              )}

              {/* Results Summary */}
              <SipResults 
                investedAmount={results.investedAmount}
                estimatedReturns={results.estimatedReturns}
                totalValue={results.totalValue}
              />

              {/* Invest Now Button */}
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105">
                INVEST NOW
              </button>
            </div>

            {/* Right Side - Chart */}
            <SipChart 
              investedAmount={results.investedAmount}
              estimatedReturns={results.estimatedReturns}
              totalValue={results.totalValue}
            />
          </div>
        </div>

        {/* Information Section */}
        <SipInfo />
      </div>
    </div>
  );
};

export default SipCalculator;
