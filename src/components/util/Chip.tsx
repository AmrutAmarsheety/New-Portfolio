import React from "react";

interface Props {
  children: string;
  className?: string;
}

export const Chip = ({ children, className = "" }: Props) => {
  return (
    <span className={`inline-block px-3 py-1 text-sm bg-indigo-500/10 text-indigo-500 rounded-full ${className}`}>
      {children}
    </span>
  );
};
