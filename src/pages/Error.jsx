import { useNavigate } from 'react-router-dom';

const Error = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Know About Me Button - Top Right */}
      <button
        onClick={() => nav('/')}
        className="absolute top-6 right-6 text-purple-300 hover:text-white transition-all duration-300 flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-400 backdrop-blur-sm z-10"
      >
        <span>←</span>
        <span className="hidden sm:inline">Back to Home</span>
      </button>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-3xl">💎</span>
          </div>
          <span className="text-3xl font-bold text-white">Investify</span>
        </div>

        {/* Error Icon with Animation */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/20 animate-bounce">
              <span className="text-7xl">😵</span>
            </div>
            {/* Floating particles */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full blur-sm animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500/30 rounded-full blur-sm animate-ping delay-500"></div>
          </div>
        </div>

        {/* Error Content Card */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 mb-8 shadow-2xl">
          {/* Error Code */}
          <div className="mb-6">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              404
            </h1>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-gray-400 text-lg mb-2">
            Looks like this investment opportunity doesn't exist...
          </p>
          <p className="text-gray-500 text-sm">
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => nav('/')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span>🏠</span>
            Go to Home
          </button>

          <button
            onClick={() => nav(-1)}
            className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
          >
            <span>←</span>
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <p className="text-gray-400 text-sm mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => nav('/dashboard')}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
            >
              Dashboard
            </button>
            <span className="text-gray-600">•</span>
            <button
              onClick={() => nav('/login')}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
            >
              Login
            </button>
            <span className="text-gray-600">•</span>
            <button
              onClick={() => nav('/signup')}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
            >
              Sign Up
            </button>
            <span className="text-gray-600">•</span>
            <button
              onClick={() => nav('/#features')}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
            >
              Features
            </button>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 bg-gradient-to-r from-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-purple-500/10 rounded-lg p-4">
          <p className="text-gray-400 text-xs italic">
            💡 Fun Fact: While you're here, did you know that starting to invest just ₹500/month at age 25 can grow to over ₹1 Crore by retirement?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;