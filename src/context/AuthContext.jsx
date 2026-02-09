// src/context/AuthContext.jsx
// Purpose: Global authentication state management
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, isAuthenticated, logout as logoutService } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const authenticated = isAuthenticated();
    const currentUser = getCurrentUser();
    
    setIsAuth(authenticated);
    setUser(currentUser);
    setLoading(false);
  };

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAuth(true);
  };

  const logout = () => {
    logoutService();
    setUser(null);
    setIsAuth(false);
  };

  const value = {
    user,
    isAuth,
    loading,
    login,
    logout,
    checkAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};