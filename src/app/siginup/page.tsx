"use client";

import Input from "@/components/Input";
import AuthBtn from "@/components/AuthBtn";
import { useSignupStore } from "@/store/signup.store";
import Panel from "@/components/Panel";
import BtnPar from "@/components/BtnPar";

import { GoPerson } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import Link from "next/link";

function Page() {
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
    <div className="flex justify-center pt-20 min-h-screen bg-[url('/image.png')] bg-cover bg-center">
      <Panel>
        <BtnPar>
          <AuthBtn className="top-1 left-[5px] hover:bg-white/5 ">
            <Link href="../login">Log in</Link>
          </AuthBtn>
          <AuthBtn className="top-1 right-[5px] text-white bg-white/15 ">
            Sign up
          </AuthBtn>
        </BtnPar>
        <h1 className="top-30 left-8 absolute font-bold text-3xl text-white">
          Create an account
        </h1>

        <div className="mb-10 mt-42">
          <form onSubmit={handleSubmit} className="w-full pl-10 pr-10 md:pt-5">
            <div className="relative mb-5">
              <Input
                onChange={handleChangeName}
                value={name}
                placeholder="Name"
              />
              <GoPerson className="absolute w-5 top-[14px] left-5" />
            </div>

            <div className="relative mb-5">
              <Input
                onChange={handleChangeEmail}
                value={email}
                placeholder="Email"
              />
              <MdOutlineMail className="absolute w-5 top-[14px] left-5" />
            </div>

            <div className="relative">
              <Input
                onChange={handleChangePassword}
                value={password}
                type="password"
                placeholder="Password"
              />
              <GoLock className="absolute w-5 top-[14px] left-5" />
            </div>
          </form>
          <div className="text-center mt-10">
            <button className="bg-white/16 text-white w-85 h-15 rounded-2xl cursor-pointer hover:bg-white/25 duration-300 ease-in-out ">
              Create an account
            </button>
          </div>
        </div>
      </Panel>
    </div>
  );
}

export default Page;
