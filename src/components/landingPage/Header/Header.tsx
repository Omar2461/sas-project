import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import NavItems from "./NavItems";

import { useTranslation } from "react-i18next";

import { CiMenuKebab } from "react-icons/ci";

import SideBar from "../SideBar";
import Button from "../Button";
import LangBtn from "@/components/LangBtn";

function Header() {
  const divEl = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

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
    <div className="flex items-center justify-center py-5 w-full md:w-full relative md:top-2  ">
      {isOpen ? <SideBar data-open={isOpen} ref={divEl} /> : ""}
      <CiMenuKebab
        onClick={handleMenueClick}
        className={`absolute  left-0 text-2xl lg:hidden md:hidden ${isOpen ? "hidden" : ""}`}
      />

      <NavItems />
      <div className="flex sm:gap-1 lg:gap-4 gap-2 text-[20px] lg:text-[20px] md:text-[17px] sm:text-[15px] sm:right-1 right-2 absolute sm:top-5 md:top-5 ">
        <LangBtn />

        <Button className="bg-white hover:bg-gray-200  ">
          <Link href="./login">{t("Sign in")}</Link>
        </Button>

        <Button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:opacity-70">
          <Link href="./signup">{t("Sign up")}</Link>
        </Button>
      </div>
    </div>
  );
}

export default Header;
