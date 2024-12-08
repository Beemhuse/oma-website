/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const useSlideIn = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      },
      { threshold: 0.1, ...options } // Default threshold with custom options
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.disconnect();
    };
  }, [options]);

  useEffect(() => {
    if (isVisible && elementRef.current) {
      anime({
        targets: elementRef.current,
        translateX: [-50, 0], // Slide in from the left
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
      });
    }
  }, [isVisible]);

  return elementRef;
};
export default useSlideIn