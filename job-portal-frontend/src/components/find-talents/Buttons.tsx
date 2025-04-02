import React from 'react';

export const PrimaryButton = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const TertiaryButton = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};