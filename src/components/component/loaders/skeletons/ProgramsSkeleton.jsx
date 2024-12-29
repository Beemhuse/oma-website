import React from "react";

export default function ProgramsSkeleton({ count = 1 }) {
  return (
    <div className="w-[450px] gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-fit  animate-pulse bg-gray-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-64 bg-gray-300"></div>
          <div className="px-4 py-2">
            <div className="h-6 bg-gray-300 rounded-md w-3/4 my-3"></div>
            <div className="h-4 bg-gray-300 rounded-md w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
