// src/pages/dashboard/Settings.jsx
// Purpose: User settings page

import { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Lock, Bell, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

const Settings = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    toast.success('Profile updated successfully!');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    toast.success('Password changed successfully!');
    setFormData(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">⚙️ Settings</h1>
          <p className="text-gray-400">Manage your account preferences</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <User size={24} className="text-purple-400" />
              Profile Information
            </h3>

            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                label="Full Name"
                icon={<User size={20} />}
              />

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email Address"
                icon={<Mail size={20} />}
              />

              <Button type="submit" variant="primary" fullWidth>
                Update Profile
              </Button>
            </form>
          </div>

          {/* Password Change */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Lock size={24} className="text-purple-400" />
              Change Password
            </h3>

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <Input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                label="Current Password"
                icon={<Lock size={20} />}
              />

              <Input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                label="New Password"
                icon={<Lock size={20} />}
              />

              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                label="Confirm New Password"
                icon={<Lock size={20} />}
              />

              <Button type="submit" variant="primary" fullWidth>
                Change Password
              </Button>
            </form>
          </div>

          {/* Notification Preferences */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Bell size={24} className="text-purple-400" />
              Notifications
            </h3>

            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-white capitalize">{key} Notifications</span>
                  <button
                    onClick={() => handleNotificationChange(key)}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      value ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Shield size={24} className="text-purple-400" />
              Security
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <p className="text-white font-semibold mb-2">Two-Factor Authentication</p>
                <p className="text-gray-400 text-sm mb-3">Add an extra layer of security</p>
                <Button variant="outline" size="sm">Enable 2FA</Button>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg">
                <p className="text-white font-semibold mb-2">Active Sessions</p>
                <p className="text-gray-400 text-sm mb-3">Manage your active sessions</p>
                <Button variant="outline" size="sm">View Sessions</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;



/*
1.Update endpoints to updatePassword
1.add Validation Here Also
*/