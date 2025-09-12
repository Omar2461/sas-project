"use client";

import SideBarElements from "@/components/myFiles/SideBarElements";
import SideBar from "@/components/shared/SideBar";
import SidebarContext from "@/context/SidebarContext";
import React, { useEffect, useRef, useState } from "react";

import { CiMenuKebab } from "react-icons/ci";

function Layout({ children }: { children: React.ReactNode }) {
  const divEl = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClick, true);
    }

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [isOpen]);

  const handleMenueClick = () => {
    setIsOpen(true);
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
          <SideBar className="bg-white" data-open={isOpen} ref={divEl}>
            <SideBarElements />
          </SideBar>
          <CiMenuKebab
            onClick={handleMenueClick}
            className={`absolute ${isOpen ? "hidden" : ""} text-2xl ml-10 mt-2 md:ml-20 md:mt-5 lg:ml-20 xl:mt-5 xl:ml-80 xl:mr-80 cursor-pointer`}
          />
          {children}
          <div id="sidebar-root" />
        </SidebarContext.Provider>
      </body>
    </html>
  );
}

export default Layout;
