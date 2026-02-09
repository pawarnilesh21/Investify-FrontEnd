// src/components/dashboard/MutualFundTable.jsx
// Purpose: Display mutual fund recommendations

import { formatCurrency, formatPercentage } from '../../utils/formatCurrency';
import { TrendingUp } from 'lucide-react';

const MutualFundTable = ({ funds = [], budget }) => {
  if (!funds || funds.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>No mutual fund recommendations available</p>
      </div>
    );
  }

  const getRiskBadge = (risk) => {
    const colors = {
      Low: 'bg-green-500/20 text-green-400 border-green-500/30',
      Moderate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      High: 'bg-red-500/20 text-red-400 border-red-500/30'
    };
    return colors[risk] || colors.Moderate;
  };

  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">💼 Mutual Fund Recommendations</h3>
          <p className="text-gray-400 text-sm">Budget: {formatCurrency(budget)}</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {funds.map((fund, index) => (
          <div 
            key={index}
            className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-5 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
          >
            {/* Fund Name & Category */}
            <div className="mb-4">
              <h4 className="text-white font-semibold text-lg mb-1">{fund.name}</h4>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">{fund.category}</span>
                <span className={`px-2 py-1 rounded text-xs border ${getRiskBadge(fund.riskLevel)}`}>
                  {fund.riskLevel} Risk
                </span>
              </div>
            </div>

            {/* NAV */}
            <div className="mb-4">
              <p className="text-gray-400 text-xs mb-1">Current NAV</p>
              <p className="text-2xl font-bold text-purple-400">{formatCurrency(fund.nav)}</p>
            </div>

            {/* Returns */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-purple-500/10 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs mb-1">1 Year</p>
                <p className="text-green-400 font-semibold text-sm flex items-center justify-center gap-1">
                  <TrendingUp size={12} />
                  {formatPercentage(fund.returns?.['1yr'] || 0)}
                </p>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs mb-1">3 Years</p>
                <p className="text-green-400 font-semibold text-sm flex items-center justify-center gap-1">
                  <TrendingUp size={12} />
                  {formatPercentage(fund.returns?.['3yr'] || 0)}
                </p>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs mb-1">5 Years</p>
                <p className="text-green-400 font-semibold text-sm flex items-center justify-center gap-1">
                  <TrendingUp size={12} />
                  {formatPercentage(fund.returns?.['5yr'] || 0)}
                </p>
              </div>
            </div>

            {/* Min SIP */}
            {fund.minSIP && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Minimum SIP</span>
                <span className="text-white font-semibold">{formatCurrency(fund.minSIP)}/month</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MutualFundTable;