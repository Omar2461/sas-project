import Link from "next/link";
import NavLinks from "./NavLinks";

function NavItems() {
  return (
    <div className="hidden md:block">
      <Link
        className="absolute sm:text-[15px] lg:text-[20px] md:text-[17px] left-0 sm:left-0"
        href="/"
      >
        DefenseStation
      </Link>

      <NavLinks />
    </div>
  );
}

export default NavItems;
