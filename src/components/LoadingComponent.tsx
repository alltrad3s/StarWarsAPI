import React from 'react';

export const LoadingComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <img 
        src="https://cdn.dribbble.com/users/146798/screenshots/4064529/media/1e47f3410502c740c131c67fc8bab32b.gif" 
        alt="BB-8 Loading" 
        className="w-64 h-64 object-contain"
      />
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
    </div>
  );
};