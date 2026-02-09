// src/components/common/Navbar.jsx
// Purpose: Navigation bar for dashboard pages

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, LogOut, User, LayoutDashboard, Target, History, Settings } from 'lucide-react';

const Navbar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Goals', path: '/dashboard/goals', icon: Target },
    { name: 'History', path: '/dashboard/history', icon: History },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    nav('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => nav('/dashboard')} 
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💎</span>
            </div>
            <span className="text-2xl font-bold text-white">Investify</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => nav(item.path)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                    ${isActive(item.path)
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-3 bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-500/30">
              <User size={20} className="text-purple-400" />
              <span className="text-white font-medium">{user?.name || 'User'}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all duration-300"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    nav(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                    ${isActive(item.path)
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30'
                      : 'text-gray-300 hover:bg-purple-500/10'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-purple-500/20">
              <div className="flex items-center gap-3 bg-purple-500/10 px-4 py-3 rounded-lg border border-purple-500/30 mb-2">
                <User size={20} className="text-purple-400" />
                <span className="text-white font-medium">{user?.name || 'User'}</span>
              </div>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




/*
1.Need to Add Sip Calculate Section 
2.
*/