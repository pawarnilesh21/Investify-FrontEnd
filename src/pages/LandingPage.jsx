import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const nav=useNavigate()
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "📊",
      title: "Smart Allocation",
      description: "AI-powered investment distribution across stocks, mutual funds, SIP, and gold"
    },
    {
      icon: "🎯",
      title: "Goal Planning",
      description: "Plan for your dream home, car, or retirement with precision"
    },
    {
      icon: "📈",
      title: "Real-time Data",
      description: "Live market prices and NAV updates for informed decisions"
    },
    {
      icon: "🛡️",
      title: "Risk Assessment",
      description: "Personalized recommendations based on your risk profile"
    }
  ];

  const stats = [
    { value: "₹50Cr+", label: "Assets Managed" },
    { value: "10K+", label: "Active Users" },
    { value: "4.9/5", label: "User Rating" },
    { value: "15%", label: "Avg. Returns" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <span className="text-2xl font-bold text-white">Investify</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-purple-300 transition" onClick={()=>nav("/login")}>Log In</button>
              <button onClick={()=>nav("/signup")} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-purple-500/30">
                🚀 Smart Investment Planning
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Journey to
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Financial Freedom</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your salary into strategic investments. Let AI guide your path to wealth with personalized plans tailored to your goals, age, and risk appetite.
            </p>

            {/* Quote Section */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 mb-12 shadow-2xl">
              <svg className="w-12 h-12 text-purple-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-2xl md:text-3xl text-white font-light italic mb-4">
                "An investment in knowledge pays the best interest"
              </p>
              <p className="text-gray-400 text-sm">— Benjamin Franklin</p>
              <div className="mt-6 text-purple-300 text-lg">
                Start investing wisely today with personalized strategies designed just for you
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Start Your Journey
                <span>→</span>
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Investify?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to build wealth, all in one intelligent platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? 'border-purple-400 shadow-2xl shadow-purple-500/20 scale-105'
                    : 'border-purple-500/20 hover:border-purple-400/50'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple. Smart. Secure.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-purple-500/50">
                1️⃣
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enter Your Details</h3>
              <p className="text-gray-400">Share your salary, age, and financial goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-purple-500/50">
                2️⃣
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get AI Recommendations</h3>
              <p className="text-gray-400">Receive personalized investment strategies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-purple-500/50">
                3️⃣
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Start Investing</h3>
              <p className="text-gray-400">Execute your plan and track growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl shadow-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Build Your Wealth?
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of smart investors who are already on their path to financial freedom
            </p>
            <button onClick={()=>nav("/signup")} className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Create Free Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💎</span>
                </div>
                <span className="text-xl font-bold text-white">Investify</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering your financial future with intelligent investment solutions.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Investify. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


/*

Work on #aboutSection
*/