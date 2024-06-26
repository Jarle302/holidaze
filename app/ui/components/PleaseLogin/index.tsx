"use client";
import { useContext, ReactNode, useState, useEffect } from "react";
import { userInfoContext } from "@/app/ui/components/UseInfoProvider";
import Link from "next/link";
export const PleaseLogin = ({ message }: { message: string }) => {
  const user = useContext(userInfoContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (user?.userInfo?.name) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <>
      {!isLoggedIn && (
        <div className="w-full h-full absolute p-3 backdrop-blur-sm top-0 z-[2000] flex justify-center items-center rounded-lg ">
          <div className=" bg-slate-700 p-3 flex flex-col justify-evenly  backdrop-blur-xl font-bold text--green">
            <p>{message}</p>
            <Link
              className="text-xl font-bold text-red-300"
              href={"/auth/login"}>
              Login
            </Link>
            <span>OR</span>
            <Link
              className="text-xl font-bold text-red-300"
              href={"/auth/register"}>
              Register
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
