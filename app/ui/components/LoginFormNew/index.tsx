"use client";
import loginAction from "../../utils/api/login";
import { useFormState, useFormStatus } from "react-dom";
import { AuthInput } from "../AuthInput";

export const LoginForm = () => {
  const [state, formAction] = useFormState(loginAction, null);
  return (
    <form
      action={formAction}
      className="w-[400px] h-[220px] flex gap-4 justify-end p-4 flex-col text-white  bg-transparent lg:border-r-4 border-red-300">
      <h1 className="text-2xl text-red-300 font-bold ">Login</h1>
      <p>{state?.data.name}</p>
      <AuthInput label="Email" name="email" />
      <AuthInput label="Password" name="password" type="password" />
      <button type="submit" className="bg-red-300 rounded-md p-1 self-start ">
        Login
      </button>
    </form>
  );
};
