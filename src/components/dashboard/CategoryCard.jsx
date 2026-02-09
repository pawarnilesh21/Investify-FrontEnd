// src/components/dashboard/CategoryCard.jsx
// Purpose: Individual investment category card

import { formatCurrency, formatPercentage } from '../../utils/formatCurrency';
import { TrendingUp, ChevronRight } from 'lucide-react';

const CategoryCard = ({ 
  icon, 
  category, 
  amount, 
  percentage, 
  color = 'purple',
  onClick 
}) => {
  const colorClasses = {
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-400',
    pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30 hover:border-pink-400',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-400',
    yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 hover:border-yellow-400',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-400'
  };

  const iconColorClasses = {
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    green: 'text-green-400',
    yellow: 'text-yellow-400',
    blue: 'text-blue-400'
  };

  return (
    <div 
      onClick={onClick}
      className={`
        bg-gradient-to-br ${colorClasses[color]}
        backdrop-blur-md border rounded-xl p-6
        cursor-pointer
        transition-all duration-300
        hover:shadow-xl hover:scale-105
        group
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`text-4xl ${iconColorClasses[color]}`}>
            {icon}
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">{category}</h4>
            <p className="text-gray-400 text-sm">{formatPercentage(percentage)}</p>
          </div>
        </div>
        
        <ChevronRight 
          className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
          size={20} 
        />
      </div>

      {/* Amount */}
      <div className="mb-4">
        <p className="text-gray-400 text-xs mb-1">Allocated Amount</p>
        <p className={`text-3xl font-bold ${iconColorClasses[color]}`}>
          {formatCurrency(amount)}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-700/50 rounded-full h-2 mb-3">
        <div 
          className={`h-2 rounded-full bg-gradient-to-r ${color === 'purple' ? 'from-purple-500 to-purple-600' : ''} ${color === 'pink' ? 'from-pink-500 to-pink-600' : ''} ${color === 'green' ? 'from-green-500 to-green-600' : ''} ${color === 'yellow' ? 'from-yellow-500 to-yellow-600' : ''} ${color === 'blue' ? 'from-blue-500 to-blue-600' : ''}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* View Button */}
      <button className="w-full py-2 bg-slate-800/50 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2">
        <TrendingUp size={16} />
        View Recommendations
      </button>
    </div>
  );
};

export default CategoryCard;