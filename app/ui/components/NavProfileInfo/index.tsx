"use client";

import Link from "next/link";
import { LogOutButton } from "../Header/LogOutButton";
type cookieObject = {
  [key: string]: string;
};

export const NavProfileInfo = () => {
  const info =
    typeof document !== "undefined"
      ? document.cookie.split("; ").reduce((prev, current) => {
          const [name, value] = current.split("=");
          console.log(name, value);
          prev[decodeURIComponent(name)] = decodeURIComponent(value);
          return prev;
        }, {} as cookieObject)
      : {};

  const { user: tempUser } = info;
  console.log(info);
  let user;
  let name = "";
  if (tempUser) {
    user = JSON.parse(tempUser);
    name = user.name;
  }
  console.log(info);
  return (
    <div>
      {!name ? (
        <>
          <Link href="/auth/register">Register</Link> /
          <Link href="/auth/login">Login</Link>
        </>
      ) : (
        <>
          <Link href={`/profile/${name}`}>
            <span className="text-red-300 font-bold">{name}</span>
          </Link>
          <LogOutButton />
        </>
      )}
    </div>
  );
};
