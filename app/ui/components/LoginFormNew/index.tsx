"use client";
import loginAction from "../../utils/api/login";
import { useFormState } from "react-dom";
import { FormButton } from "@/app/ui/components/FormButton";
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
      className="w-[280px] sm:w-[400px] h-[220px] flex gap-4 justify-end  flex-col text-slate-700  bg-transparent">
      <h1 className="text-2xl text-slate-700 font-bold ">Login</h1>
      <AuthInput label="Email" name="email" />
      <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="email" />
      <AuthInput label="Password" name="password" type="password" />
      <ValidatedErrorMsg
        errorArray={state as ZodIssue[]}
        inputName="password"
      />

      <FormButton
        defaultText="Login"
        loadingText="Logging in.."
        className="p-3 bg-zinc-800 text-zinc-100 font-bold rounded-lg"
        loadingStyle="p-3 bg-zinc-300 text-zinc-800 font-bold rounded-lg"
      />
    </form>
  );
};
