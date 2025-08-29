"use client";
import { ButtonHTMLAttributes } from "react";

type BtnTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

function AuthBtn({ children, className, ...rest }: BtnTypes) {
  return (
    <button
      className={`text-gray-400 rounded-4xl absolute w-23 h-9 top-1 hover:scale-110 transform duration-400 ease-in-out origin-center   ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default AuthBtn;
