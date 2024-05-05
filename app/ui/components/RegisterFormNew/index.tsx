"use client";
import { AuthInput } from "../AuthInput";
import registerAction from "../../utils/api/register";
import { useFormState, useFormStatus } from "react-dom";
import Image from "next/image";
import { useRef } from "react";
export const RegisterForm = () => {
  const [state, formAction] = useFormState(registerAction, null);
  return (
    <div className="w-full h-full overflow-hidden">
      <form
        action={formAction}
        className="h-full flex flex-col-reverse sm:flex-row max-w-[800px] sm:h-[400px] text-zinc-800 bg-white py-3">
        <div className="min-h-[400px] sm:w-2/5 sm:h-full flex flex-col  justify-around p-8 items-center">
          <div className=" border-r-1 h-[180px]  w-[180px] border-red-300 ">
            <img
              className="h-full w-full "
              src="/profilePlaceholder.png"
              alt=""
            />
          </div>
          <AuthInput label="ImageUrl" name="imageUrl" />
          <button
            type="submit"
            className="bg-red-300 rounded-md p-2 self-start ">
            Register
          </button>
        </div>
        <div className="sm:w-3/5 px-8 sm:border-l-2 h-full border-red-300 flex flex-col justify-between">
          <Image
            className="ml-auto  self-start w-[80px]"
            src="/stampLogo.webp"
            alt="Holidaze logo, in the form of a post stamp"
            height={1024}
            width={1024}
          />
          <div className="flex flex-col gap-4 w-[280px] border-b-2 border-red-300 pb-8">
            <AuthInput label="name" name="name" />
            <AuthInput label="Email" name="email" type="email" />
            <AuthInput label="Password" name="password" type="password" />
          </div>
        </div>
      </form>
    </div>
  );
};
