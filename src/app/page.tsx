"use client";

import { useTranslation } from "react-i18next";
import "./i18n";
import Header from "@/components/landingPage/Header/Header";
import Link from "next/link";
import Panel from "@/components/Panel";

import { BiTransfer } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import Logo from "@/components/landingPage/Logo";
import Parag from "@/components/landingPage/Parag";
import Button from "@/components/landingPage/Button";

export default function Home() {
  const { t, i18n } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div
      dir={direction}
      className="bg-gradient-to-b from-sky-200 to-blue-500 min-h-screen border relative pl-5 pr-5 pt-4 sm:pl-5 sm:pr-5 md:pt-0 md:pl-10 md:pr-10 lg:pt-0 lg:pl-20 lg:pr-20"
    >
      <Header />
      <div className="mt-40 ">
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
        <Button className="mt-5 bg-gradient-to-r from-sky-400 to-blue-500 text-black hover:opacity-80">
          <Link href="./signup">{t("Book a Demo")}</Link>
        </Button>
      </div>
      <div className="flex flex-col items-center mt-40  ">
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
        <div className="flex flex-wrap justify-center gap-5 mt-15 w-60 md:w-180 lg:w-full ">
          <Panel className="w-75 h-70 flex flex-col items-center pt-10 text-center p-1">
            <Logo>
              <BiTransfer className="text-2xl" />
            </Logo>
            <h1 className="text-2xl font-bold mb-2">{t("Sypher")}</h1>
            <Parag>
              {t(
                "Quantum-safe data sharing service with modular components to integrate within anything with advanced security controls",
              )}
              .
            </Parag>
          </Panel>

          <Panel className="w-75 h-70 flex flex-col items-center pt-10 text-center p-1">
            <Logo>
              <MdPayments className="text-2xl" />
            </Logo>
            <h1 className="text-2xl font-bold mb-2">
              {t("Automated Compliance")}
            </h1>
            <Parag>
              {t(
                "Get cyber security policies in just a few minutes and Ask questions to your policy buddy insted of reading the whole document",
              )}
              .
            </Parag>
          </Panel>

          <Panel className="w-75 h-70 flex flex-col items-center pt-10 text-center p-1">
            <Logo>
              <FaWallet className="text-2xl" />
            </Logo>
            <h1 className="text-2xl font-bold mb-2">
              {t("Asset Intelligence")}
            </h1>
            <Parag>
              {t(
                "Get full contextual visibility of your business with an Ai buddy on your side for any questions or doubts",
              )}
              .
            </Parag>
          </Panel>
        </div>
        <br />
      </div>
    </div>
  );
}
