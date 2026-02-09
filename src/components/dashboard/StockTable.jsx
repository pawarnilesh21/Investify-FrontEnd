// src/components/dashboard/StockTable.jsx
// Purpose: Display stock recommendations in table format

import { formatCurrency, formatNumber } from '../../utils/formatCurrency';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const StockTable = ({ stocks = [], budget }) => {
  if (!stocks || stocks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>No stock recommendations available</p>
      </div>
    );
  }

  const getTrendIcon = (recommendation) => {
    if (recommendation === 'BUY' || recommendation === 'STRONG BUY') {
      return <TrendingUp className="text-green-400" size={18} />;
    } else if (recommendation === 'SELL' || recommendation === 'STRONG SELL') {
      return <TrendingDown className="text-red-400" size={18} />;
    }
    return <Minus className="text-yellow-400" size={18} />;
  };

  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">📈 Stock Recommendations</h3>
          <p className="text-gray-400 text-sm">Budget: {formatCurrency(budget)}</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-purple-500/20">
              <th className="text-left py-3 px-4 text-gray-300 font-semibold text-sm">Name</th>
              <th className="text-right py-3 px-4 text-gray-300 font-semibold text-sm">Price</th>
              <th className="text-right py-3 px-4 text-gray-300 font-semibold text-sm hidden md:table-cell">Market Cap</th>
              <th className="text-right py-3 px-4 text-gray-300 font-semibold text-sm hidden md:table-cell">P/E Ratio</th>
              <th className="text-right py-3 px-4 text-gray-300 font-semibold text-sm hidden lg:table-cell">Debt/Equity</th>
              <th className="text-center py-3 px-4 text-gray-300 font-semibold text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr 
                key={index}
                className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors duration-200"
              >
                <td className="py-4 px-4">
                  <div>
                    <p className="text-white font-medium">{stock.name}</p>
                    <p className="text-gray-400 text-xs">{stock.symbol}</p>
                  </div>
                </td>
                <td className="text-right py-4 px-4">
                  <p className="text-white font-semibold">{formatCurrency(stock.currentPrice)}</p>
                </td>
                <td className="text-right py-4 px-4 hidden md:table-cell">
                  <p className="text-gray-300">{stock.marketCap}</p>
                </td>
                <td className="text-right py-4 px-4 hidden md:table-cell">
                  <p className="text-gray-300">{stock.peRatio}</p>
                </td>
                <td className="text-right py-4 px-4 hidden lg:table-cell">
                  <p className="text-gray-300">{stock.debtToEquity}</p>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    {getTrendIcon(stock.recommendation)}
                    <span className={`text-sm font-semibold ${
                      stock.recommendation === 'BUY' || stock.recommendation === 'STRONG BUY' 
                        ? 'text-green-400' 
                        : stock.recommendation === 'SELL' || stock.recommendation === 'STRONG SELL'
                        ? 'text-red-400'
                        : 'text-yellow-400'
                    }`}>
                      {stock.recommendation}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Why This? Section */}
      {stocks[0]?.reason && (
        <div className="mt-6 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
          <p className="text-sm text-gray-400">
            <strong className="text-purple-400">💡 Why {stocks[0].name}?</strong> {stocks[0].reason}
          </p>
        </div>
      )}
    </div>
  );
};

export default StockTable;