// src/components/common/Loader.jsx
// Purpose: Reusable loading spinner component

const Loader = ({ size = 'md', fullScreen = false }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const spinner = (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">{spinner}</div>
          <p className="text-gray-400 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return spinner;
};

export default Loader;