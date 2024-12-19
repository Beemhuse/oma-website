"use client"; // Required for client-side rendering

import SvgPathLoader from "@/components/component/loaders/SvgLoader";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function MainLayout({ children }) {
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  useEffect(() => {
    // Simulate app initialization (e.g., API fetch, setup)
    const initializeApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulated delay
      setIsAppInitialized(true);
    };

    initializeApp();
  }, []);

  // Render splash screen while initializing
  if (!isAppInitialized) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <SvgPathLoader />
      </div>
    );
  }

  // Render main application after initialization
  return <div>
        <Toaster />
        {children}</div>;
}
