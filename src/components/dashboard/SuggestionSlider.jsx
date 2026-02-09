// src/components/dashboard/SuggestionSlider.jsx
// Purpose: Investment percentage adjustment slider

import { useState } from 'react';
import Button from '../common/Button';
import { formatCurrency } from '../../utils/formatCurrency';
import { Percent, TrendingUp, PiggyBank } from 'lucide-react';

const SuggestionSlider = ({ salary, suggestedPercentage = 25, onConfirm }) => {
  const [percentage, setPercentage] = useState(suggestedPercentage);
  
  const investmentAmount = (salary * percentage) / 100;
  const savingsAmount = salary - investmentAmount;

  const handleSliderChange = (e) => {
    setPercentage(Number(e.target.value));
  };

  const handleConfirm = () => {
    onConfirm(percentage, investmentAmount);
  };

  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-2">
          Investment Recommendation
        </h3>
        <p className="text-gray-400">
          We suggest investing <span className="text-purple-400 font-semibold">{suggestedPercentage}%</span> of your salary
        </p>
      </div>

      {/* Suggested Amount */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 mb-8 text-center">
        <p className="text-gray-300 text-sm mb-2">Suggested Investment Amount</p>
        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {formatCurrency((salary * suggestedPercentage) / 100)}
        </p>
        <p className="text-gray-400 text-sm mt-2">per month</p>
      </div>

      {/* Slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-300 font-medium flex items-center gap-2">
            <Percent size={20} className="text-purple-400" />
            Adjust Your Investment
          </label>
          <span className="text-2xl font-bold text-purple-400">{percentage}%</span>
        </div>
        
        <input
          type="range"
          min="5"
          max="70"
          step="5"
          value={percentage}
          onChange={handleSliderChange}
          className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-purple"
        />
        
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>5%</span>
          <span>25%</span>
          <span>50%</span>
          <span>70%</span>
        </div>
      </div>

      {/* Breakdown */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {/* Investment */}
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-green-400" size={20} />
            <p className="text-gray-300 text-sm">You'll Invest</p>
          </div>
          <p className="text-2xl font-bold text-green-400">
            {formatCurrency(investmentAmount)}
          </p>
        </div>

        {/* Savings */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <PiggyBank className="text-blue-400" size={20} />
            <p className="text-gray-300 text-sm">You'll Save</p>
          </div>
          <p className="text-2xl font-bold text-blue-400">
            {formatCurrency(savingsAmount)}
          </p>
        </div>
      </div>

      {/* Confirm Button */}
      <Button
        onClick={handleConfirm}
        variant="primary"
        size="lg"
        fullWidth
        icon="✓"
      >
        Confirm & Generate Allocation
      </Button>

      {/* Info Note */}
      <div className="mt-4 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
        <p className="text-xs text-gray-400 text-center">
          💡 <strong>Tip:</strong> Financial experts recommend investing 20-30% of your income for long-term wealth creation
        </p>
      </div>

      {/* Slider Styles */}
      <style jsx>{`
        .slider-purple::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(to right, #a855f7, #ec4899);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }

        .slider-purple::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(to right, #a855f7, #ec4899);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }

        .slider-purple::-webkit-slider-runnable-track {
          background: linear-gradient(to right, 
            #a855f7 0%, 
            #a855f7 ${percentage}%, 
            #1e293b ${percentage}%, 
            #1e293b 100%
          );
        }

        .slider-purple::-moz-range-track {
          background: #1e293b;
        }
      `}</style>
    </div>
  );
};

export default SuggestionSlider;