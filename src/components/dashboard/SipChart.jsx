// frontend/src/components/dashboard/SipChart.jsx
// Purpose: Donut chart visualization for SIP calculator

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../utils/formatCurrency';

const SipChart = ({ investedAmount, estimatedReturns, totalValue }) => {
  const chartData = [
    { name: 'Invested Amount', value: investedAmount, color: '#e5e7eb' },
    { name: 'Estimated Returns', value: estimatedReturns, color: '#3b82f6' }
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Legend */}
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

      {/* Chart */}
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

      {/* Total Value Display */}
      <div className="text-center mt-4">
        <p className="text-gray-400 text-sm">Total Investment Value</p>
        <p className="text-3xl font-bold text-white mt-1">
          {formatCurrency(totalValue)}
        </p>
      </div>
    </div>
  );
};

export default SipChart;