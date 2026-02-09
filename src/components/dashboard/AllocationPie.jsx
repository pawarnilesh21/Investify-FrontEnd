// src/components/dashboard/AllocationPie.jsx
// Purpose: Pie chart showing investment allocation breakdown

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { formatCurrency } from '../../utils/formatCurrency';

const AllocationPie = ({ allocations }) => {
  if (!allocations) return null;

  const data = [
    { name: 'Stocks', value: allocations.stocks?.amount || 0, color: '#8b5cf6' },
    { name: 'Mutual Funds', value: allocations.mutualFunds?.amount || 0, color: '#ec4899' },
    { name: 'SIP', value: allocations.sip?.amount || 0, color: '#10b981' },
    { name: 'Gold', value: allocations.gold?.amount || 0, color: '#f59e0b' },
    { name: 'Insurance', value: allocations.insurance?.amount || 0, color: '#3b82f6' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-purple-500/30 rounded-lg p-3 shadow-xl">
          <p className="text-white font-semibold">{payload[0].name}</p>
          <p className="text-purple-400">{formatCurrency(payload[0].value)}</p>
          <p className="text-gray-400 text-sm">
            {((payload[0].value / data.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Investment Distribution
      </h3>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry) => (
              <span className="text-gray-300">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.map((item, index) => (
          <div 
            key={index}
            className="text-center p-3 bg-slate-800/50 rounded-lg border border-purple-500/20"
          >
            <div 
              className="w-4 h-4 rounded-full mx-auto mb-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <p className="text-xs text-gray-400 mb-1">{item.name}</p>
            <p className="text-sm font-bold text-white">
              {formatCurrency(item.value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllocationPie;


/* 
1. Constant Data Update Add Emergency Fund
*/