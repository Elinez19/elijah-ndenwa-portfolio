// components/Card.tsx

import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-black-100 shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = "" }) => {
  return (
    <h4 className={`text-xl font-bold text-white ${className}`}>
      {children}
    </h4>
  );
};

type CardDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-gray-600 ${className}`}>
      {children}
    </p>
  );
};
