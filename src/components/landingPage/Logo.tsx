function Logo({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-4">
      {children}
    </div>
  );
}

export default Logo;
