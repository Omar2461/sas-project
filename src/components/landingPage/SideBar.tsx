"use client";

import { createPortal } from "react-dom";
import { useEffect, useState, forwardRef } from "react";
import NavItems from "./Header/NavLinks";

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-open"?: boolean;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  ({ "data-open": dataOpen, ...rest }, ref) => {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
      setContainer(document.getElementById("sidebar-root"));
    }, []);

    if (!container) return null;

    const barContent = (
      <div
        ref={ref}
        {...rest}
        className={`fixed top-0 left-0 h-full w-64 z-50 flex bg-black/80 justify-center pt-70 text-white sm:hidden md:hidden lg:hidden
              transition-transform duration-500 ease-in-out
              ${dataOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <NavItems />
      </div>
    );
    return createPortal(barContent, container);
  },
);

SideBar.displayName = "SideBar";

export default SideBar;
