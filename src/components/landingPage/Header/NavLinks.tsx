import Link from "next/link";
import { useTranslation } from "react-i18next";
import NavLi from "./NavLi";

function NavLinks() {
  const { t } = useTranslation();
  return (
    <ul className="lg:flex md:flex lg:text-[17px] md:gap-3 lg:gap-6 md:pr-15  ">
      <Link href="./signup">
        <NavLi>{t("Home")}</NavLi>
      </Link>
      <Link href="./signup">
        <NavLi>{t("Product")}</NavLi>
      </Link>
      <Link href="./signup">
        <NavLi>{t("Services")}</NavLi>
      </Link>
      <Link href="./signup">
        <NavLi>{t("About us")}</NavLi>
      </Link>
      <Link href="./signup">
        <NavLi>{t("Contact us")}</NavLi>
      </Link>
    </ul>
  );
}

export default NavLinks;
