// src/components/dashboard/InputForm.jsx
// Purpose: Form to collect user's financial details

import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { validateSalary, validateAge } from '../../utils/validateForm';
import { DollarSign, Calendar, Target, Shield } from 'lucide-react';

const InputForm = ({ onSubmit, initialValues = {} }) => {
  const [formData, setFormData] = useState({
    salary: initialValues.salary || '',
    age: initialValues.age || '',
    goal: initialValues.goal || 'Wealth Creation',
    riskProfile: initialValues.riskProfile || 'Moderate',
    investmentPercentage: 20
  });

  const [errors, setErrors] = useState({});

  const goals = [
    'Wealth Creation',
    'Buy Home',
    'Buy Car',
    'Retirement Planning',
    'Education Fund',
    'Emergency Fund'
  ];

  const riskProfiles = [
    { value: 'Conservative', label: 'Conservative', desc: 'Low risk, stable returns' },
    { value: 'Moderate', label: 'Moderate', desc: 'Balanced risk and returns' },
    { value: 'Aggressive', label: 'Aggressive', desc: 'High risk, high returns' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    const newErrors = {};
    
    const salaryValidation = validateSalary(formData.salary);
    if (!salaryValidation.valid) {
      newErrors.salary = salaryValidation.message;
    }
    
    const ageValidation = validateAge(formData.age);
    if (!ageValidation.valid) {
      newErrors.age = ageValidation.message;
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit
    onSubmit(formData);
  };

  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          Let's Plan Your Investments 🎯
        </h2>
        <p className="text-gray-400">
          Tell us about your financial goals and we'll create a personalized plan
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Monthly Salary */}
        <Input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          label="Monthly Salary"
          placeholder="Enter your monthly salary"
          icon={<DollarSign size={20} />}
          error={errors.salary}
          required
        />

        {/* Age */}
        <Input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          label="Age"
          placeholder="Enter your age"
          icon={<Calendar size={20} />}
          error={errors.age}
          required
        />

        {/* Financial Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Financial Goal <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Target size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full pl-10 px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              required
            >
              {goals.map(goal => (
                <option key={goal} value={goal}>{goal}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Risk Profile */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Risk Profile <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {riskProfiles.map(profile => (
              <button
                key={profile.value}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, riskProfile: profile.value }))}
                className={`
                  p-4 rounded-lg border-2 transition-all duration-300 text-left
                  ${formData.riskProfile === profile.value
                    ? 'border-purple-500 bg-purple-500/20'
                    : 'border-purple-500/30 bg-slate-800/50 hover:border-purple-400'
                  }
                `}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={18} className="text-purple-400" />
                  <h4 className="font-semibold text-white">{profile.label}</h4>
                </div>
                <p className="text-sm text-gray-400">{profile.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          icon="🚀"
        >
          Generate My Investment Plan
        </Button>
      </form>
    </div>
  );
};

export default InputForm;
 


/*
1. Multiple Selection For financialGoal
2. 

*/