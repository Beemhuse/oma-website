import React from "react";
import Link from "next/link";

const Button = ({
  href,
  label,
  onClick,
  isButton = true,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hoverColor = "hover:bg-blue-700",
  size = "md",
  rounded = true,
}) => {
  // Dynamic size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `
    ${bgColor} 
    ${textColor} 
    ${hoverColor} 
    ${sizeClasses[size]} 
    ${rounded ? "rounded" : ""}
    transition 
    duration-200 
    ease-in-out
  `;

  // Render as a button or link
  if (isButton) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {label}
      </button>
    );
  }

  return (
    <Link href={href || "#"} className={baseClasses}>
      {label}
    </Link>
  );
};

export default Button;
