
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 40 }) => {
  return (
    <div className={`logo-container ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fist-logo"
      >
        {/* Top ceiling line */}
        <path d="M0 15 H100" stroke="#16a34a" strokeWidth="4" />
        
        {/* Fist shape */}
        <path 
          d="M35 85C35 85 35 45 35 40C35 35 40 35 45 35C50 35 50 40 50 40V65M50 40C50 40 50 35 55 35C60 35 60 40 60 40V60M60 40C60 40 60 35 65 35C70 35 70 40 70 40V55M70 40C70 40 70 35 75 35C80 35 80 40 80 45V50"
          stroke="#16a34a" 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#22c55e"
        />
        
        {/* Wrist */}
        <path 
          d="M30 85C30 85 30 70 35 65C40 60 65 60 75 55" 
          stroke="#16a34a" 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Breaking effect */}
        <path 
          d="M0 15 Q25 25 50 15 Q75 5 100 15" 
          stroke="#16a34a" 
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1,3"
          fill="none" 
        />
      </svg>
    </div>
  );
};

export default Logo;
