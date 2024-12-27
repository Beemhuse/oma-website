'use client'
import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const useSlideInAnimation = (direction = 'left', duration = 1000, delay = 0) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && ref.current) {
      anime({
        targets: ref.current,
        translateX: direction === 'left' ? ['-100%', '0%'] : ['100%', '0%'],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration,
        delay,
      });
    }
  }, [isVisible, direction, duration, delay]);

  return ref;
};

export default useSlideInAnimation;
