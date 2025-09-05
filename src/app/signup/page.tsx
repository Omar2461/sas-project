"use client";

import { useTranslation } from "react-i18next";

import Input from "@/components/Input";
import AuthBtn from "@/components/AuthBtn";
import Panel from "@/components/Panel";
import BtnPar from "@/components/BtnPar";
import LangBtn from "@/components/LangBtn";

import { useSignupStore } from "@/store/signup.store";

import { GoPerson } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

function Page() {
  const { t } = useTranslation();

  const {
    signup: { name, email, password },
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
  } = useSignupStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleNameChange(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleEmailChange(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    handlePasswordChange(event.target.value);
  };

  return (
    <div className="flex justify-center pt-20 min-h-screen bg-gradient-to-b from-sky-200 to-blue-500 ">
      <LangBtn className="absolute right-10 top-10" />
      <Panel className="w-90 md:w-100 md:h-150 max-sm:h-150">
        <BtnPar>
          <AuthBtn className="top-1 left-[5px] hover:bg-white/5 ">
            <Link href="../login">{t("Log in")}</Link>
          </AuthBtn>
          <AuthBtn className="top-1 right-[5px] text-white bg-white/15 ">
            {t("Sign up")}
          </AuthBtn>
        </BtnPar>

        <button className="absolute right-8 bg-black/60 text-center w-8.5 h-8 flex pt-1 justify-center md: text-md rounded-4xl  transition-transform duration-300 ease-in-out hover:rotate-90">
          <Link href="/">
            <IoMdClose className="text-xl text-white pt-1" />
          </Link>
        </button>
        <h1 className="top-30 left-8 absolute font-bold text-2xl md:text-3xl text-white">
          {t("Create an account")}
        </h1>

        <div className="mb-10 mt-42">
          <form onSubmit={handleSubmit} className="w-full pl-10 pr-10 md:pt-5">
            <div className="relative mb-5">
              <Input
                onChange={handleChangeName}
                value={name}
                placeholder={t("Name")}
              />
              <GoPerson className="absolute w-5 top-[14px] left-1 md:left-5" />
            </div>

            <div className="relative mb-5">
              <Input
                onChange={handleChangeEmail}
                value={email}
                placeholder={t("Email")}
              />
              <MdOutlineMail className="absolute w-5 top-[14px] left-1 md:left-5" />
            </div>

            <div className="relative">
              <Input
                onChange={handleChangePassword}
                value={password}
                type="password"
                placeholder={t("Password")}
              />
              <GoLock className="absolute w-5 top-[14px] left-1 md:left-5" />
            </div>
          </form>
          <div className="text-center mt-10">
            <button className="bg-white/16 text-white w-45 h-15 md:w-85 rounded-2xl cursor-pointer hover:bg-white/25 duration-300 ease-in-out ">
              {t("Create an account")}
            </button>
          </div>
        </div>
      </Panel>
    </div>
  );
}

export default Page;
