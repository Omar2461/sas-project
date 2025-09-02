"use client";

import { useTranslation } from "react-i18next";
import "./i18n";
import Header from "@/components/landingPage/Header/Header";
import Link from "next/link";

export default function Home() {
  const { t, i18n } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div
      dir={direction}
      className="bg-gradient-to-b from-sky-200 to-blue-500 min-h-screen border relative pl-5 pr-5 pt-4 sm:pl-5 sm:pr-5 md:pt-0 md:pl-10 md:pr-10 lg:pt-0 lg:pl-20 lg:pr-20"
    >
      <Header />
      <div className="relative  h-100 top-40 ">
        <h1 className="text-2xl w-62 font-bold  sm:w-full sm:text-3xl lg:w-125 lg:text-5xl transtion duration-400">
          {t("Security made Easy,")}
          <br />
          {t("Efficient and Affordable")}
        </h1>
        <p className="mt-4 text-xs sm:text-sm md:text-lg w-full md:w-135 transtion duration-400 ">
          {t(
            "That`s why we have built a single platform for all your security needs, which",
          )}
          <br />
          {t(
            "plays well in the ecosystem to protect what matters the most to you",
          )}
        </p>
        <button className=" w-35 rounded-lg mt-5 p-1 bg-gradient-to-r from-sky-400 to-blue-500 text-black cursor-pointer hover:opacity-80 transition-transform duration-300 hover:scale-110">
          <Link href="./signup">{t("Book a Demo")}</Link>
        </button>
      </div>
      <div className="flex flex-col items-center relative top-40  ">
        <h1 className="font-bold md:text-3xl text-2xl lg:text-4xl mb-4 transtion duration-400">
          {t("Unique features")}
        </h1>
        <p className="transtion duration-400 lg:text-xl md:text-lg ml-5 ">
          {t(
            "That`s why we have built a single platform for all your security needs, which",
          )}
          <br />
          {t(
            "plays well in the ecosystem to protect what matters the most to you",
          )}
        </p>
      </div>
    </div>
  );
}
