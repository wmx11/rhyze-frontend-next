import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="loading loading-ring"></span>
      <span>Loading</span>
    </div>
  );
};

export default Loading;
