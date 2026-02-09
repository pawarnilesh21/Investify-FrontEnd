// src/components/dashboard/HeroSection.jsx
// Purpose: Welcome message and daily quote display

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { TrendingUp, DollarSign, Target } from 'lucide-react';

const HeroSection = ({ totalInvestment = 0, portfolioValue = 0, expectedReturns = 0 }) => {
  const { user } = useAuth();
  const [quote, setQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    loadQuote();
  }, []);

  const loadQuote = async () => {
    try {
      const response = await fetch('/quotes.json');
      const quotes = await response.json();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    } catch (error) {
      setQuote({
        quote: 'An investment in knowledge pays the best interest.',
        author: 'Benjamin Franklin'
      });
    }
  };

  const quickStats = [
    {
      icon: DollarSign,
      title: 'This Month',
      value: `₹${(totalInvestment || 0).toLocaleString('en-IN')}`,
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Value',
      value: `₹${(portfolioValue || 0).toLocaleString('en-IN')}`,
      color: 'pink'
    },
    {
      icon: Target,
      title: 'Expected Returns',
      value: `${expectedReturns || 12}%`,
      color: 'green'
    }
  ];

  return (
    <div className="mb-12">
      {/* Welcome Message */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Welcome back, {user?.name || 'Investor'}! 👋
        </h1>
        <p className="text-gray-400 text-lg">
          Let's continue building your financial future
        </p>
      </div>

      {/* Quote Card */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 mb-8 shadow-2xl">
        <svg className="w-12 h-12 text-purple-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p className="text-xl md:text-2xl text-white font-light italic mb-4 text-center">
          "{quote.quote}"
        </p>
        <p className="text-gray-400 text-sm text-center">— {quote.author}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center`}>
                  <Icon className={`text-${stat.color}-400`} size={24} />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;



/*
1. should need to Remove Current Portfolio for Temp
2. 
*/