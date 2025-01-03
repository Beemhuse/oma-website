'use client'
import useBackToTop from '@/hooks/useBackToTop';
import React from 'react';
import { BiSolidUpArrowSquare } from "react-icons/bi";

const BackToTopButton = () => {
  const { isVisible, scrollToTop } = useBackToTop();

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4  text-red-500  transition"
        aria-label="Back to Top"
      >
<BiSolidUpArrowSquare size={30} />
      </button>
    )
  );
};

export default BackToTopButton;
