// src/components/dashboard/ActionButtons.jsx
// Purpose: Save, Export, Modify action buttons

import Button from '../common/Button';
import { Save, FileDown, Edit, Rocket } from 'lucide-react';

const ActionButtons = ({ 
  onSave, 
  onExport, 
  onModify, 
  onStartInvesting,
  loading = false 
}) => {
  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-4">⚡ Quick Actions</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Modify Plan */}
        <Button
          variant="outline"
          onClick={onModify}
          icon={<Edit size={18} />}
          className="flex-col h-auto py-4"
        >
          <span className="mt-2">Modify Plan</span>
        </Button>

        {/* Save Plan */}
        <Button
          variant="primary"
          onClick={onSave}
          loading={loading}
          icon={<Save size={18} />}
          className="flex-col h-auto py-4"
        >
          <span className="mt-2">Save Plan</span>
        </Button>

        {/* Export PDF */}
        <Button
          variant="secondary"
          onClick={onExport}
          icon={<FileDown size={18} />}
          className="flex-col h-auto py-4"
        >
          <span className="mt-2">Export PDF</span>
        </Button>

        {/* Start Investing */}
        <Button
          variant="success"
          onClick={onStartInvesting}
          icon={<Rocket size={18} />}
          className="flex-col h-auto py-4"
        >
          <span className="mt-2">Start Investing</span>
        </Button>
      </div>

      {/* Info Note */}
      <div className="mt-4 p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
        <p className="text-xs text-gray-400 text-center">
          💾 Save your plan to access it anytime. Export as PDF to share with your financial advisor.
        </p>
      </div>
    </div>
  );
};

export default ActionButtons;



/*
1. Sip Calculation Retunrs
*/