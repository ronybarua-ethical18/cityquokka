"use client";
import React from 'react';
import dividerIcon from '@/assets/divider.svg';

const CustomDivider = ({ className = "" }) => {
  return (
    <img
      src={dividerIcon}
      alt="divider"
      width={1120}
      height={3}
      className={`w-full ${className}`}
    />
  );
};

export default CustomDivider;