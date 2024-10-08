import React from 'react';

export const LoadingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500"></div>
      <iframe src="https://lottie.host/embed/d075c402-1ed0-45c3-83b5-e19c8129ec40/oO1BA53nqt.json"></iframe>
      <h2 className="text-2xl font-semibold mt-4 text-gray-700">Loading...</h2>
    </div>
  )
};
