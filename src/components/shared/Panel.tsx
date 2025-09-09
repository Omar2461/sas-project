"use client";

import { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={`bg-black/40 rounded-4xl relative hover:scale-105 duration-400 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
}

export default Panel;
