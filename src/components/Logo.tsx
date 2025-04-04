
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 40 }) => {
  return (
    <div className={`logo-container ${className}`}>
      <img 
        src="/lovable-uploads/3af01d19-8794-433f-8708-bcf1fa281fd3.png" 
        alt="MailGuinea Logo" 
        width={size} 
        height={size}
        className="guinea-logo"
      />
    </div>
  );
};

export default Logo;
