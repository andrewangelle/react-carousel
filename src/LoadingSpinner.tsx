import React from 'react';

export function LoadingSpinner({ width }: { width: number }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${(width / 66) * 50}px`
      }}
    >
      <div className="loading-indicator" />
    </div>
  )
}
