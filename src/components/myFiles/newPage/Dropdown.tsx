"use client";

import Panel from "@/components/shared/Panel";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import i18n from "@/app/i18n";

interface DropdownOption {
  name: string;
}

interface DropdownProps {
  options: DropdownOption[];
  className?: string;
}

function Dropdown({ options, className }: DropdownProps) {
  const [Selected, setSelected] = useState("");
  const [dropOpen, setDropOpen] = useState(false);

  const divEl = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target as Node)) {
        setDropOpen(false);
      }
    };

    if (dropOpen) {
      document.addEventListener("click", handleClick, true);
    }

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [dropOpen]);

  const handleSelect = (title: string) => {
    setSelected(title);
    setDropOpen(false);
  };

  const handleDropdownClick = () => {
    setDropOpen((prev) => !prev);
  };

  const renderOptions = options.map(({ name }, idx) => (
    <li className="w-full" key={idx} onClick={() => handleSelect(name)}>
      <Panel
        className={`bg-white border border-gray-300 text-black md:w-90 lg:w-90 rounded-xl p-3`}
      >
        {name}
      </Panel>
    </li>
  ));
  return (
    <div
      ref={divEl}
      className={`bg-white flex flex-col w-full hover:scale-105 transtion duration-400 ease-in-out md:w-90 lg:w-90`}
    >
      <Panel
        onClick={handleDropdownClick}
        className={`text-black md:w-90 lg:w-90 rounded-xl p-5 ${className} `}
      >
        {Selected}

        {dropOpen ? (
          <IoIosArrowUp
            className={`absolute text-lg top-1 ${i18n.language === "ar" ? "left-5" : "right-5"}`}
          />
        ) : (
          <IoIosArrowDown
            className={`absolute text-lg top-1 ${i18n.language === "ar" ? "left-5" : "right-5"}`}
          />
        )}
      </Panel>
      <ol
        className={`flex flex-col mt-2 gap-1 w-full  ${!dropOpen ? "hidden" : ""}`}
      >
        <AnimatePresence>
          {dropOpen && (
            <motion.ol
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col mt-2 gap-1 w-full origin-top"
            >
              {renderOptions}
            </motion.ol>
          )}
        </AnimatePresence>
      </ol>
    </div>
  );
}

export default Dropdown;
