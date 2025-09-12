"use client";

import { createPortal } from "react-dom";
import { useEffect, useState, forwardRef } from "react";

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-open"?: boolean;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  ({ "data-open": dataOpen, children, className, ...rest }, ref) => {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
      setContainer(document.getElementById("sidebar-root"));
    }, []);

    if (!container) return null;

    const barContent = (
      <div
        ref={ref}
        {...rest}
        className={`fixed top-0 left-0 h-full w-64 z-50 flex pt-10
              transition-transform duration-500 ease-in-out ${className}
              ${dataOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {children}
      </div>
    );
    return createPortal(barContent, container);
  },
);

SideBar.displayName = "SideBar";

export default SideBar;
