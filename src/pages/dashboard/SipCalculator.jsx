

// frontend/src/pages/dashboard/SipCalculator.jsx
// Purpose: SIP and Lumpsum investment calculator

import { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { formatCurrency } from '../../utils/formatCurrency';
import toast from 'react-hot-toast'
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
    const monthlyRate = Math.pow(1 + returnRate / 100, 1 / 12) - 1;
    const months = timePeriod * 12;
    
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
    const futureValue = totalInvestment * Math.pow(1 + returnRate / 100, timePeriod);
    const estimatedReturns = futureValue - totalInvestment;
    
    return {
      investedAmount: totalInvestment,
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue)
    };
  };

  const results = calculatorMode === 'SIP' ? calculateSIP() : calculateLumpsum();

  // Pie Chart Data
  const chartData = [
    { name: 'Invested Amount', value: results.investedAmount, color: '#e5e7eb' },
    { name: 'Estimated Returns', value: results.estimatedReturns, color: '#3b82f6' }
  ];

  //handle Invest Now
  const handleSubmit=()=>{
    //This feature is in under construction or we will work on that
    toast("🚧 This feature is under construction",{
         duration: 3000, // match your toaster global duration
    icon: "⚙️",
    style: {
      background: '#1e293b',      // same as Toaster
      color: '#fff',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: '8px',
      padding: '12px 16px',
      fontWeight: 500,
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    },
    })

  }

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
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-gray-300 font-medium">Monthly Investment</label>
                      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-lg font-bold border border-green-500/30">
                        {formatCurrency(sipData.monthlyInvestment)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="1000000"
                      step="500"
                      value={sipData.monthlyInvestment}
                      onChange={(e) => setSipData({ ...sipData, monthlyInvestment: Number(e.target.value) })}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-green"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹100</span>
                      <span>₹10,00,000</span>
                    </div>
                  </div>

                  {/* Expected Return Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-gray-300 font-medium">Expected Return Rate (p.a)</label>
                      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-lg font-bold border border-green-500/30">
                        {sipData.returnRate}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.5"
                      value={sipData.returnRate}
                      onChange={(e) => setSipData({ ...sipData, returnRate: Number(e.target.value) })}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-green"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  {/* Time Period */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-gray-300 font-medium">Time Period</label>
                      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-lg font-bold border border-green-500/30">
                        {sipData.timePeriod} Yr
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={sipData.timePeriod}
                      onChange={(e) => setSipData({ ...sipData, timePeriod: Number(e.target.value) })}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-green"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1 Yr</span>
                      <span>40 Yr</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Total Investment */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-gray-300 font-medium">Total Investment</label>
                      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-lg font-bold border border-green-500/30">
                        {formatCurrency(lumpSumData.totalInvestment)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="10000000"
                      step="1000"
                      value={lumpSumData.totalInvestment}
                      onChange={(e) => setLumpSumData({ ...lumpSumData, totalInvestment: Number(e.target.value) })}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-green"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹1,000</span>
                      <span>₹1,00,00,000</span>
                    </div>
                  </div>

                  {/* Expected Return Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-gray-300 font-medium">Expected Return Rate (p.a)</label>
                      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-lg font-bold border border-green-500/30">
                        {lumpSumData.returnRate}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.5"
                      value={lumpSumData.returnRate}
                      onChange={(e) => setLumpSumData({ ...lumpSumData, returnRate: Number(e.target.value) })}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-green"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  {/* Time Period */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-gray-300 font-medium">Time Period</label>
                      <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-lg font-bold border border-green-500/30">
                        {lumpSumData.timePeriod} Yr
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={lumpSumData.timePeriod}
                      onChange={(e) => setLumpSumData({ ...lumpSumData, timePeriod: Number(e.target.value) })}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-green"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1 Yr</span>
                      <span>40 Yr</span>
                    </div>
                  </div>
                </>
              )}

              {/* Results Summary */}
              <div className="space-y-3 pt-4 border-t border-purple-500/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">💰 Invested Amount:</span>
                  <span className="text-white font-bold text-lg">{formatCurrency(results.investedAmount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">📈 Estimated Returns:</span>
                  <span className="text-green-400 font-bold text-lg">{formatCurrency(results.estimatedReturns)}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-purple-500/20">
                  <span className="text-gray-300 font-semibold">🏦 Total Value:</span>
                  <span className="text-purple-400 font-bold text-2xl">{formatCurrency(results.totalValue)}</span>
                </div>
              </div>

              {/* Invest Now Button */}
              <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105">
                INVEST NOW
              </button>
            </div>

            {/* Right Side - Chart */}
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span className="text-gray-400">Invested Amount</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-gray-400">Estimated Returns</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="text-center mt-4">
                <p className="text-gray-400 text-sm">Total Investment Value</p>
                <p className="text-3xl font-bold text-white mt-1">{formatCurrency(results.totalValue)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">📚 About SIP Calculator</h2>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              A <strong className="text-purple-400">SIP Calculator</strong> is a tool that helps you determine the returns you can avail when parking your funds in mutual fund investments through Systematic Investment Plan (SIP).
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">What is SIP?</h3>
            <p>
              <strong>Systematic Investment Plan (SIP)</strong> is a process of investing a fixed sum of money in mutual funds at regular intervals. SIPs usually allow you to invest weekly, quarterly, or monthly. It helps you become financially disciplined and create a habit of savings.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">How Does SIP Calculator Work?</h3>
            <p>The SIP calculator uses the following formula:</p>
            <div className="bg-slate-800/50 p-4 rounded-lg my-4 font-mono text-sm">
              M = P × ({`{[1 + i]^n – 1} / i`}) × (1 + i)
            </div>
            <p>Where:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>M</strong> = Maturity amount</li>
              <li><strong>P</strong> = Monthly investment amount</li>
              <li><strong>n</strong> = Number of monthly payments</li>
              <li><strong>i</strong> = Monthly rate of return</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">Benefits of SIP Calculator</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Helps determine the investment amount needed for your goals</li>
              <li>Shows total invested amount over the investment period</li>
              <li>Provides estimated returns based on expected rate</li>
              <li>Helps in financial planning and wealth creation</li>
              <li>Easy to use and gives instant results</li>
            </ul>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
              <p className="text-blue-300 text-sm">
                <strong>⚠️ Note:</strong> The SIP calculator provides estimated returns. Actual returns may vary depending on market conditions. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Styles */}
      <style jsx>{`
        .slider-green::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: linear-gradient(to right, #10b981, #059669);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }

        .slider-green::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: linear-gradient(to right, #10b981, #059669);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </div>
  );
};

export default SipCalculator;

/*
To display the projected Growth or Calculations Of SIP's
*/


