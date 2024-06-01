"use client";
import { useContext, ReactNode, useState, useEffect } from "react";
import { userInfoContext } from "@/app/ui/components/UseInfoProvider";
import Link from "next/link";
export const PleaseLogin = ({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) => {
  const user = useContext(userInfoContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (user?.userInfo.name) {
      console.log({ user });
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="relative">
      {children}
      {!isLoggedIn && (
        <div className="w-full h-full absolute backdrop-blur-md top-0">
          <p>{message}</p>
          <Link href={"/auth/login"}>Login</Link>
          <span>OR</span>
          <Link href={"/auth/register"}>Register</Link>
        </div>
      )}
    </div>
  );
};
