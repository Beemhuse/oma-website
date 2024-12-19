import React from "react";

export default function SubscriptionCard({price, duration, benefits }) {
  return (
    <div>
    <div className="bg-white p-6 rounded-3xl shadow-md w-80 mx-auto relative overflow-hidden">
    {/* Price Section */}
    <div className="absolute -top-8 -left-4 w-full h-28 bg-green-100 transform skew-y-6"></div>

    <div className="relative z-10 mt-4">
        <div className="bg-green-100 rounded-2xl w-fit mx-auto px-4 py-2">
          <p className="text-green-800 font-bold text-xl text-center">
            {price}/{duration}
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <ul className="mt-6 space-y-3 text-gray-700 text-sm">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-black mr-2 mt-0.5">✔</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Get Started */}
      <div className="mt-6 text-center font-bold text-black">
        <button className="flex items-center gap-1 text-black hover:text-green-800">
          Get started <span>&#8594;</span>
        </button>
      </div>
    </div>
    </div>
  );
}
