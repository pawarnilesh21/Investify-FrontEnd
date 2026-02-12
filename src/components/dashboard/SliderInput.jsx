// frontend/src/components/dashboard/SliderInput.jsx
// Purpose: Reusable slider with input field component

import { ChevronUp, ChevronDown } from 'lucide-react';

const SliderInput = ({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step, 
  suffix = '',
  prefix = '',
  formatValue = (val) => val
}) => {
  
  const handleIncrement = () => {
    const newValue = Math.min(Number(value) + step, max);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(Number(value) - step, min);
    onChange(newValue);
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value.replace(/[^0-9.]/g, ''); // Allow only numbers and decimal
    
    if (inputValue === '') {
      onChange(min);
      return;
    }

    const numValue = Number(inputValue);
    
    if (numValue >= min && numValue <= max) {
      onChange(numValue);
    } else if (numValue > max) {
      onChange(max);
    } else if (numValue < min) {
      onChange(min);
    }
  };

  const handleSliderChange = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <div>
      {/* Label and Value Display with Input */}
      <div className="flex justify-between items-center mb-3">
        <label className="text-gray-300 font-medium">{label}</label>
        
        <div className="flex items-center gap-2">
          {/* Input Field with Arrows */}
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg flex items-center overflow-hidden">
            <span className="text-green-400 font-bold px-2">{prefix}</span>
            <input
              type="text"
              value={formatValue(value)}
              onChange={handleInputChange}
              className="bg-transparent text-green-400 font-bold px-2 py-1 w-24 text-right focus:outline-none"
            />
            <span className="text-green-400 font-bold px-2">{suffix}</span>
            
            {/* Up/Down Arrows */}
            <div className="flex flex-col border-l border-green-500/30">
              <button
                onClick={handleIncrement}
                className="px-2 py-0.5 hover:bg-green-500/20 transition-colors"
              >
                <ChevronUp size={14} className="text-green-400" />
              </button>
              <button
                onClick={handleDecrement}
                className="px-2 py-0.5 hover:bg-green-500/20 transition-colors border-t border-green-500/30"
              >
                <ChevronDown size={14} className="text-green-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-green"
      />
      
      {/* Min/Max Labels */}
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{prefix}{formatValue(min)}{suffix}</span>
        <span>{prefix}{formatValue(max)}{suffix}</span>
      </div>

      {/* Slider Styles */}
      <style jsx>{`
        .slider-green::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: linear-gradient(to right, #10b981, #059669);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }

        .slider-green::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: linear-gradient(to right, #10b981, #059669);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </div>
  );
};

export default SliderInput;