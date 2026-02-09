// src/pages/dashboard/Goals.jsx
// Purpose: Goals planning page

import Navbar from '../../components/common/Navbar';
import { Target, Home, Car, GraduationCap, Heart } from 'lucide-react';

const Goals = () => {
  const goals = [
    {
      icon: Home,
      title: 'Buy Home',
      target: '₹50,00,000',
      timeline: '10 years',
      monthlySIP: '₹25,000',
      color: 'purple'
    },
    {
      icon: Car,
      title: 'Buy Car',
      target: '₹12,00,000',
      timeline: '3 years',
      monthlySIP: '₹28,000',
      color: 'pink'
    },
    {
      icon: GraduationCap,
      title: 'Education Fund',
      target: '₹25,00,000',
      timeline: '15 years',
      monthlySIP: '₹8,000',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Retirement',
      target: '₹2,00,00,000',
      timeline: '25 years',
      monthlySIP: '₹35,000',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🎯 Your Financial Goals</h1>
          <p className="text-gray-400">Plan and track your long-term financial objectives</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-${goal.color}-500/20 rounded-full flex items-center justify-center`}>
                    <Icon className={`text-${goal.color}-400`} size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{goal.title}</h3>
                    <p className="text-gray-400">Target: {goal.target}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400">Timeline</span>
                    <span className="text-white font-semibold">{goal.timeline}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400">Monthly SIP Required</span>
                    <span className="text-purple-400 font-bold">{goal.monthlySIP}</span>
                  </div>

                  <div className="w-full bg-slate-700/50 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r from-${goal.color}-500 to-${goal.color}-600`}
                      style={{ width: '35%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 text-center">35% Progress</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Goals;


/*
1. Should work on that endpoint

*/