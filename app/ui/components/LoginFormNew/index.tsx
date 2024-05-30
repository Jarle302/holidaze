"use client";
import loginAction from "../../utils/api/login";
import { useFormState, useFormStatus } from "react-dom";
import { AuthInput } from "../AuthInput";
import { ValidatedErrorMsg } from "../ValidatedErrorMsg";
import { ZodIssue } from "zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { userInfoContext } from "../UseInfoProvider";
import { useEffect } from "react";
import { UserInfo } from "../../constants/types";
export const LoginForm = () => {
  const [state, formAction] = useFormState(loginAction, null);
  const router = useRouter();

  const user = useContext(userInfoContext);
  useEffect(() => {
    console.log("useeffect ran", user);
    if (user !== undefined) {
      const { userInfo, setUserInfo } = user;
      console.log("user is not undefind", state);
      if (state && "name" in state) {
        console.log("there is name in state", state);
        setUserInfo(state as UserInfo);
        router.push("/");
      }
    }
  }, [state]);

  console.log(state);
  return (
    <form
      action={formAction}
      className="w-[400px] h-[220px] flex gap-4 justify-end p-4 flex-col text-white  bg-transparent lg:border-r-4 border-red-300">
      <h1 className="text-2xl text-red-300 font-bold ">Login</h1>
      <AuthInput label="Email" name="email" />
      <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="email" />
      <AuthInput label="Password" name="password" type="password" />
      <ValidatedErrorMsg
        errorArray={state as ZodIssue[]}
        inputName="password"
      />

      <button type="submit" className="bg-red-300 rounded-md p-1 self-start ">
        Login
      </button>
    </form>
  );
};
