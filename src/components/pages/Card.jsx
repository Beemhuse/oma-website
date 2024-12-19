import React from 'react'

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

