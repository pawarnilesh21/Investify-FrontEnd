// src/pages/dashboard/History.jsx
// Purpose: Investment history page

import Navbar from '../../components/common/Navbar';
import { Calendar, TrendingUp, TrendingDown } from 'lucide-react';

const History = () => {
  const transactions = [
    {
      date: '2025-02-01',
      category: 'Stocks',
      action: 'BUY',
      amount: 4000,
      returns: '+12%',
      positive: true
    },
    {
      date: '2025-02-01',
      category: 'Mutual Funds',
      action: 'SIP',
      amount: 8000,
      returns: '+8%',
      positive: true
    },
    {
      date: '2025-01-01',
      category: 'Gold',
      action: 'BUY',
      amount: 2000,
      returns: '-2%',
      positive: false
    },
    {
      date: '2025-01-01',
      category: 'Insurance',
      action: 'Premium',
      amount: 2000,
      returns: 'N/A',
      positive: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">📜 Investment History</h1>
          <p className="text-gray-400">Track your past investments and returns</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-slate-800/50 border border-purple-500/20 rounded-xl hover:border-purple-400 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Calendar className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{transaction.category}</h4>
                    <p className="text-gray-400 text-sm">{transaction.date}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-white font-semibold">₹{transaction.amount.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">{transaction.action}</p>
                </div>

                <div className="flex items-center gap-2">
                  {transaction.positive === true && (
                    <TrendingUp className="text-green-400" size={20} />
                  )}
                  {transaction.positive === false && (
                    <TrendingDown className="text-red-400" size={20} />
                  )}
                  <span className={`font-semibold ${
                    transaction.positive === true ? 'text-green-400' : 
                    transaction.positive === false ? 'text-red-400' : 
                    'text-gray-400'
                  }`}>
                    {transaction.returns}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;