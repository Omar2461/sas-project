import React from "react";

function Button({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={`px-2 sm:px-2 sm:py-1 md:px-2 md:py-1 rounded-md transtion duration-400 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
