"use client";

import "../i18n";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Input from "@/components/shared/Input";

import { useSidebar } from "@/context/SidebarContext";
import { useTranslation } from "react-i18next";

import { CiSearch } from "react-icons/ci";

import Table from "@/components/myFiles/Table";
import MostUsedFolders from "@/components/myFiles/documentsPage/MostUsedFolders";
import InfoCards from "@/components/myFiles/documentsPage/InfoCards";
import StatChart from "@/components/myFiles/documentsPage/StatChart";

function Page() {
  const data = [
    {
      name: "Project Proposal",
      owner: "Liam Bennett",
      date: "2023-08-15",
      size: "2.5 MB",
    },
    {
      name: "Meeting Notes",
      owner: "Olivia Hayes",
      date: "2023-08-14",
      size: "1.2 MB",
    },
    {
      name: "Client Contract",
      owner: "Ethan Wong",
      date: "2023-08-12",
      size: "3.8 MB",
    },
    {
      name: "Marketing Plan",
      owner: "Sophia Clark",
      date: "2023-08-10",
      size: "4.1 MB",
    },
    {
      name: "Financial Report",
      owner: "Nathan Patel",
      date: "2023-08-08",
      size: "5.3 MB",
    },
  ];

  const { isOpen } = useSidebar();
  const { t, i18n } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <div
      dir={direction}
      className={`w-screen h-screen bg-white flex flex-col p-10 md:p-20 lg:p-20 ${isOpen ? "lg:pl-70 md:pl-70" : ""} xl:pl-80 xl:pr-80 transtion duration-400`}
    >
      <Breadcrumb />
      <h1 className=" text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
        {t("Documents")}
      </h1>
      <div className="relative mt-5">
        <Input
          className={`bg-gray-300 text-black ${direction == "rtl" ? "pr-20" : ""}`}
          placeholder={t("Search")}
        />
        <CiSearch
          className={`absolute left-2 top-4 md:left-5 md:top-[13px] md:text-xl lg:top-[13px] lg:left-5 lg:text-xl ${direction == "rtl" ? "right-8" : ""} `}
        />
      </div>

      <InfoCards />

      <StatChart />

      <h1 className="font-bold mt-5">{t("Most Used Folders")}</h1>
      <MostUsedFolders dir={direction} />

      <h1 className="font-bold mt-5">Quick Access</h1>
      <Table data={data} />
    </div>
  );
}

export default Page;
