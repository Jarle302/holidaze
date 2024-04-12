"use client";
import { AuthInput } from "../AuthInput";
import Image from "next/image";

export const RegisterForm = () => {
  return (
    <form className="flex max-w-[800px] h-[400px] text-zinc-800 bg-white py-3">
      <div className="w-2/5 h-full flex flex-col  justify-around p-8 items-center">
        <div className=" border-r-1 h-[180px] w-[180px] border-red-300 ">
          <img className="h-full w-full" src="/profilePlaceholder.png" alt="" />
        </div>
        <AuthInput
          label="ImageUrl"
          handleChange={(e) => console.log(e.target)}
          name="imageUrl"
        />
        <button className="bg-red-300 rounded-md p-2 self-start ">
          Register
        </button>
      </div>
      <div className="w-3/5 px-8 border-l-2 h-full border-red-300 flex flex-col justify-between">
        <Image
          className="ml-auto self-start w-[80px]"
          src="/stampLogo.webp"
          alt="Holidaze logo, in the form of a post stamp"
          height={1024}
          width={1024}
        />
        <div className="flex flex-col gap-4 w-[280px] border-b-2 border-red-300 pb-8">
          <AuthInput
            label="name"
            handleChange={(e) => console.log(e.target)}
            name="name"
          />
          <AuthInput
            label="Email"
            handleChange={(e) => console.log(e.target)}
            name="email"
            type="email"
          />
          <AuthInput
            label="Password"
            handleChange={(e) => console.log(e.target)}
            name="password"
            type="password"
          />
        </div>
      </div>
    </form>
  );
};
