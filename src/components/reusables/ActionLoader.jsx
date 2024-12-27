import React from 'react'

export default function ActionLoader({ isVisible }) {
  if (!isVisible) return null; // Render nothing if the loader is not visible

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="loader2"></div>
    </div>
  );
}
