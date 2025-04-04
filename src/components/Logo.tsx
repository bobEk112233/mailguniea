
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 40 }) => {
  return (
    <div className={`logo-container ${className}`}>
      <img 
        src="/lovable-uploads/c3f05c23-3fac-4182-84fa-10e59f5f9bce.png" 
        alt="MailGuinea Logo" 
        width={size} 
        height={size}
        className="guinea-logo"
      />
    </div>
  );
};

export default Logo;
