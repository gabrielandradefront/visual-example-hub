
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyle = "inline-flex items-center justify-center rounded-md font-medium transition-all button-hover focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#0c2340] text-white hover:bg-[#0a1c33] focus:ring-[#0c2340]",
    secondary: "bg-[#c8a035] text-[#0c2340] hover:bg-[#dbb13c] focus:ring-[#c8a035]",
    outline: "border-2 border-[#0c2340] bg-transparent text-[#0c2340] hover:bg-[#f0f5fa] focus:ring-[#0c2340]",
    ghost: "bg-transparent text-[#0c2340] hover:bg-[#f0f5fa] focus:ring-[#0c2340]",
  };
  
  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-3",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
