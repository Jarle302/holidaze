"use client";

import Link from "next/link";
import { userInfoContext } from "../UseInfoProvider";
import { useContext } from "react";
import { LogOutButton } from "../Header/LogOutButton";
type cookieObject = {
  [key: string]: string;
};

export const NavProfileInfo = () => {
  const user = useContext(userInfoContext);
  console.log({ user });
  return (
    <div>
      {!user?.userInfo?.name ? (
        <>
          <Link href="/auth/register">Register</Link> /
          <Link href="/auth/login">Login</Link>
        </>
      ) : (
        <>
          <Link href={`/profile/${user?.userInfo?.name}`}>
            <span className="text-red-300 font-bold">
              {user?.userInfo?.name}
            </span>
          </Link>
          <LogOutButton />
        </>
      )}
    </div>
  );
};
