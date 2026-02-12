// frontend/src/components/dashboard/SipResults.jsx
// Purpose: Display calculation results

import { formatCurrency } from '../../utils/formatCurrency';

const SipResults = ({ investedAmount, estimatedReturns, totalValue }) => {
  return (
    <div className="space-y-3 pt-4 border-t border-purple-500/20">
      {/* Invested Amount */}
      <div className="flex justify-between items-center">
        <span className="text-gray-400">💰 Invested Amount:</span>
        <span className="text-white font-bold text-lg">
          {formatCurrency(investedAmount)}
        </span>
      </div>

      {/* Estimated Returns */}
      <div className="flex justify-between items-center">
        <span className="text-gray-400">📈 Estimated Returns:</span>
        <span className="text-green-400 font-bold text-lg">
          {formatCurrency(estimatedReturns)}
        </span>
      </div>

      {/* Total Value */}
      <div className="flex justify-between items-center pt-3 border-t border-purple-500/20">
        <span className="text-gray-300 font-semibold">🏦 Total Value:</span>
        <span className="text-purple-400 font-bold text-2xl">
          {formatCurrency(totalValue)}
        </span>
      </div>
    </div>
  );
};

export default SipResults;