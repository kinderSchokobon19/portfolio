import React from 'react';
import centraleLogo from '../assets/CentraleSupélec.png';

export const CentraleSupelecLogo = ({ size = 'md' }) => {
  const sizeMap = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16',
  };

  return (
    <img 
      src={centraleLogo}
      alt="CentraleSupelec Logo"
      className={`${sizeMap[size]} object-contain`}
    />
  );
};

export const CentraleSupelecLogoOfficial = ({ size = 'md' }) => {
  const sizeMap = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  return (
    <div className={`flex items-center ${sizeMap[size]}`}>
      <img 
        src={centraleLogo}
        alt="CentraleSupelec Logo"
        className={`${sizeMap[size]} object-contain`}
      />
    </div>
  );
};

export default CentraleSupelecLogo;
