// src/components/common/Input.jsx
// Purpose: Reusable input field component

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  label,
  error,
  icon,
  required = false,
  disabled = false,
  min,
  max,
  step,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          className={`
            w-full px-4 py-3 
            ${icon ? 'pl-10' : ''}
            bg-slate-800/50 
            border 
            ${error ? 'border-red-500' : 'border-purple-500/30'}
            rounded-lg 
            text-white 
            placeholder-gray-500 
            focus:outline-none 
            focus:ring-2 
            focus:ring-purple-500 
            focus:border-transparent 
            transition-all 
            duration-300
            disabled:opacity-50 
            disabled:cursor-not-allowed
          `}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;