"use client";
import loginAction from "../../utils/api/login";
import { useFormState, useFormStatus } from "react-dom";
import { AuthInput } from "../AuthInput";
import formErrorMessage from "../../utils/formErrorMessage";

export const LoginForm = () => {
  const [state, formAction] = useFormState(loginAction, null);
  const emailError = formErrorMessage(state, "email");
  const passwordError = formErrorMessage(state, "password");
  console.log(state);
  return (
    <form
      action={formAction}
      className="w-[400px] h-[220px] flex gap-4 justify-end p-4 flex-col text-white  bg-transparent lg:border-r-4 border-red-300">
      <h1 className="text-2xl text-red-300 font-bold ">Login</h1>
      <AuthInput label="Email" name="email" />
      {emailError && <p>{emailError}</p>}
      <AuthInput label="Password" name="password" type="password" />
      {passwordError && <p>{passwordError}</p>}
      <button type="submit" className="bg-red-300 rounded-md p-1 self-start ">
        Login
      </button>
    </form>
  );
};
