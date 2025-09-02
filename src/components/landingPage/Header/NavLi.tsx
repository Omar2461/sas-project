function NavLi({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={`mb-5 transition-transform duration-300 ease-in-out hover:scale-110 ${className}`}
    >
      {children}
    </li>
  );
}

export default NavLi;
