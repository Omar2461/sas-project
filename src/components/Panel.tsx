"use client";

import { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
};

function Panel({ children }: PanelProps) {
  return (
    <div className="bg-black/40 rounded-4xl w-70 md:w-100 md:h-150 relative hover:scale-105 duration-400 ease-in-out">
      {children}
    </div>
  );
}

export default Panel;
