import { useSidebar } from "@/context/SidebarContext";
import { useTranslation } from "react-i18next";

import React, { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

function Container({ children, className, ...rest }: ContainerProps) {
  const { isOpen } = useSidebar();
  const { i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div
      dir={direction}
      className={`w-screen h-screen bg-white flex flex-col p-10 md:p-20 lg:p-20 ${isOpen ? "lg:pl-70 md:pl-70" : ""} xl:pl-80 xl:pr-80 transtion duration-400 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Container;
