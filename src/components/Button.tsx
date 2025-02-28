
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
    primary: "bg-[#33C3F0] text-white hover:bg-[#1EAEDB] focus:ring-[#33C3F0]",
    secondary: "bg-[#ea384c] text-white hover:bg-[#d13344] focus:ring-[#ea384c]",
    outline: "border-2 border-[#33C3F0] bg-transparent text-[#33C3F0] hover:bg-[#D3E4FD] focus:ring-[#33C3F0]",
    ghost: "bg-transparent text-[#33C3F0] hover:bg-[#D3E4FD] focus:ring-[#33C3F0]",
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
