import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signup } from "../services/authService"

const SignupPage=()=>{
  const nav=useNavigate()
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
  })

  const [loading,setLoading]= useState(false)
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    setError('')
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    setError('')
    setSuccess('')

    if(!formData.name || !formData.email || !formData.password ){
      setError("All fields are Required")
      return
    }

    if(formData.password.length < 6){
      setError('Password must be at Least 6 Characters')
      return
    }
    try {
      setLoading(true)
      await signup(formData)
      setSuccess("Account created Successfully ! Redirecting to login...")
      setTimeout(()=>nav('/login'),1500)
    } catch (error) {
      setError(error?.response?.data?.error || error.message || "SignUp failed")
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
            Create Your Account
          </h1>
          <p className="text-gray-400">Start your journey to financial freedom</p>
        </div>

        {/* Signup Form Card */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

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
                placeholder="Enter password (min 6 characters)"
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg text-sm">
                {success}
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
                  Creating Account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Redirect to Login */}
            <div className="text-center pt-4">
              <p className="text-gray-400 text-sm">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => nav('/login')}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                >
                  Login here
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs">
            By signing up, you agree to our{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;


//sing up end point 
//1.st email name pass
//accept and store in the db.!!
//