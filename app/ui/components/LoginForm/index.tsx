"use client";

import { AuthInput } from "../AuthInput";

export const LoginForm = () => {
  return (
    <form className="w-[400px] h-[220px] flex gap-4 justify-end p-4 flex-col text-white  bg-transparent lg:border-r-4 border-red-300">
      <AuthInput
        label="UserName"
        handleChange={(e) => console.log(e.target)}
        name="test"
      />
      <AuthInput
        label="Password"
        handleChange={(e) => console.log(e.target)}
        name="test"
        type="password"
      />
      <button className="bg-red-300 rounded-md p-1 self-start ">Login</button>
    </form>
  );
};
