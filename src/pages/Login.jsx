import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {login as loginService} from '../services/authService'
import { useState } from "react";

const LoginPage = () => {
  const nav=useNavigate()
  const {login}=useAuth()

  const [formData,setFormData]=useState({email:'',password:''})
  const [loading ,setLoading]=useState(false)
  const [error,setError]=useState('')

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    setError('')
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    setError('')

    if(!formData.email || !formData.password){
      setError('All Fields are required')
      return
    }

    try {
      setLoading(true)
      const data=await loginService(formData)
      login(data.user,data.token)
      nav('/dashboard')
    } catch (error) {
      setError(error.error || error.message || "Invalid Credentials")
    }finally{
      setLoading(false)
    }

  }




  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6 py-12 relative">
      {/* Know About Me Button - Top Right */}
      <button
        onClick={() => nav('/')}
        className="absolute top-6 right-6 text-purple-300 hover:text-white transition-all duration-300 flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-400 backdrop-blur-sm"
      >
        <span>←</span>
        <span className="hidden sm:inline">Know About Me</span>
      </button>

      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-3xl">💎</span>
            </div>
            <span className="text-3xl font-bold text-white">Investify</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-400">Login to continue your investment journey</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => nav('/forgot-password')}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                Forgot Password?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>

            {/* Redirect to Signup */}
            <div className="text-center pt-4">
              <p className="text-gray-400 text-sm">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => nav('/signup')}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                >
                  Sign up here
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Social Login Section (Optional) */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-500/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white hover:bg-slate-800/80 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm">Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white hover:bg-slate-800/80 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#1877F2"/>
              </svg>
              <span className="text-sm">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;



/*
update thigns =>forgetPassword

*/