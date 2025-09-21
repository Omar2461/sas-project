"use client";

import Button from "@/components/landingPage/Button";
import Container from "@/components/myFiles/Container";
import Dropdown from "@/components/myFiles/Dropdown";
import Breadcrumb from "@/components/shared/Breadcrumb";

import { useSidebar } from "@/context/SidebarContext";
import { useTranslation } from "react-i18next";

function Page() {
  const first = [
    {
      name: "You can share files by selecting the file and clicking the 'Share' button",
    },
    {
      name: "Choose whether to generate a shareable link or invite specific people via their email addresses.",
    },
    { name: "Adjust permissions (view, edit, or comment) before sending." },
  ];

  const second = [
    {
      name: "Free accounts come with 5 GB of storage.",
    },
    {
      name: "Premium accounts include 100 GB or more (depending on your plan).",
    },
    { name: "You can check your current usage in Settings > Storage." },
  ];

  const third = [
    {
      name: "Deleted files are moved to the Trash/Recycle Bin and can be restored within 30 days.",
    },
    {
      name: "Go to Trash, find your file, and click Restore.",
    },
    { name: "Files permanently deleted after 30 days cannot be recovered." },
  ];

  const { isOpen } = useSidebar();
  const { t } = useTranslation();

  return (
    <Container>
      <Breadcrumb />
      <h1 className="text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
        {t("Help and support")}
      </h1>
      <p className="text-gray-500 mt-3">
        {t(
          "Find answers to common questions or contact our support team for assistance",
        )}
        .
      </p>

      <div className="mt-10">
        <h1 className="text-lg font-bold lg:text-xl lg:font-bold md:text-xl md:font-bold transtion duration-400">
          {t("Frequently asked questions")}
        </h1>
        <div className="mt-5 flex flex-col gap-4">
          <Dropdown
            className={`bg-white border border-gray-400 p-3 ${isOpen ? "lg:w-150  md:w-120 xl:w-200" : "lg:w-200  md:w-150"}`}
            options={first}
            shouldHandleClick={false}
            defaultValue="How do i share files with others?"
          />
          <Dropdown
            className={`bg-white border border-gray-400 p-3 ${isOpen ? "lg:w-150  md:w-120 xl:w-200" : "lg:w-200  md:w-150"}`}
            options={second}
            shouldHandleClick={false}
            defaultValue="What are the storage limits for my account?"
          />
          <Dropdown
            className={`bg-white border border-gray-400 p-3 ${isOpen ? "lg:w-150  md:w-120 xl:w-200" : "lg:w-200  md:w-150"}`}
            options={third}
            shouldHandleClick={false}
            defaultValue="How do i recover deleted files?"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <h1 className="text-lg font-bold lg:text-xl lg:font-bold md:text-xl md:font-bold transtion duration-400">
          {t("Contact support")}
        </h1>
        <p>
          {t(
            "if you need further assistance, please contact our support team. We're here to help!",
          )}
        </p>

        <Button className="bg-teal-950 text-white rounded-3xl w-40">
          {t("Contact Support")}
        </Button>
      </div>
    </Container>
  );
}
export default Page;
