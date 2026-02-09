// src/components/dashboard/InsightsCard.jsx
// Purpose: Display financial insights and tips

import { Lightbulb, TrendingUp, Shield, AlertCircle } from 'lucide-react';

const InsightsCard = ({ allocations, userInputs }) => {
  const insights = [
    {
      icon: TrendingUp,
      title: 'Stability Score',
      value: '85/100',
      description: 'Your plan is well-balanced across multiple asset classes',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Diversification',
      value: 'Excellent',
      description: 'Spread across 5 different investment categories',
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Projected Growth',
      value: '₹45L in 10 years',
      description: 'Based on 12% average annual returns',
      color: 'purple'
    }
  ];

  const tips = [
    {
      icon: '💡',
      text: 'Your SIP investments can save you up to ₹46,800 in taxes under Section 80C'
    },
    {
      icon: '⚠️',
      text: 'Consider building an emergency fund of 6 months expenses before aggressive investing'
    },
    {
      icon: '📈',
      text: 'Increasing your SIP by just 10% annually can double your corpus over 20 years'
    }
  ];

  const colorClasses = {
    green: 'from-green-500/20 to-green-600/20 border-green-500/30',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
  };

  const textColorClasses = {
    green: 'text-green-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400'
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-6">📊 Financial Insights</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${colorClasses[insight.color]} backdrop-blur-md border rounded-xl p-4`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-${insight.color}-500/20 rounded-lg flex items-center justify-center`}>
                    <Icon className={textColorClasses[insight.color]} size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{insight.title}</p>
                    <p className={`text-xl font-bold ${textColorClasses[insight.color]}`}>
                      {insight.value}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{insight.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-4">💡 Smart Tips for You</h3>
        
        <div className="space-y-3">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg hover:border-purple-400 transition-all duration-300"
            >
              <span className="text-2xl">{tip.icon}</span>
              <p className="text-gray-300 text-sm flex-1">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Market Trends (Optional) */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-4">📰 Market Overview</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-slate-800/50 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Nifty 50</p>
            <p className="text-green-400 font-semibold">+1.2%</p>
          </div>
          <div className="text-center p-3 bg-slate-800/50 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Sensex</p>
            <p className="text-green-400 font-semibold">+0.8%</p>
          </div>
          <div className="text-center p-3 bg-slate-800/50 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">Gold</p>
            <p className="text-red-400 font-semibold">-0.3%</p>
          </div>
          <div className="text-center p-3 bg-slate-800/50 rounded-lg">
            <p className="text-gray-400 text-xs mb-1">USD/INR</p>
            <p className="text-yellow-400 font-semibold">83.25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;