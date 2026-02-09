// src/App.jsx
// Purpose: Main App Component

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DashboardProvider } from './context/DashboardContext';

// Pages
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Dashboard from './pages/dashboard/Dashboard';
import Goals from './pages/dashboard/Goals';
import History from './pages/dashboard/History';
import Settings from './pages/dashboard/Settings';

import Loader from './components/common/Loader';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuth, loading } = useAuth();

  if (loading) {
    return <Loader fullScreen />;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Public Route (redirect to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { isAuth, loading } = useAuth();

  if (loading) {
    return <Loader fullScreen />;
  }

  if (isAuth) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route 
        path="/signup" 
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } 
      />
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } 
      />

      {/* Protected Dashboard Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <DashboardProvider>
              <Dashboard />
            </DashboardProvider>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/dashboard/goals" 
        element={
          <ProtectedRoute>
            <Goals />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/dashboard/history" 
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/dashboard/settings" 
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } 
      />

      {/* 404 Error Page */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </AuthProvider>
    </Router>
  );
}

export default App;
