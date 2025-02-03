"use client"
import { useState, useEffect } from "react";

const useCountUp = (start = 0, end = 100, duration = 2000) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start >= end || duration <= 0) return;

    const stepTime = duration / (end - start);
    let currentCount = start;

    const interval = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);

      if (currentCount >= end) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, end, duration]);

  return count;
};

export default useCountUp;