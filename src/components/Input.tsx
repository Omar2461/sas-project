"use client";

function Input({ ...others }) {
  return (
    <input
      {...others}
      autoComplete="current-password"
      className="bg-black/40 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 pl-15 h-12 w-full transition-all duration-500 ease-in-out hover:bg-black/50"
    />
  );
}

export default Input;
