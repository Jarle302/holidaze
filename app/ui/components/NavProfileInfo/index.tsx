"use client";

import Link from "next/link";

type cookieObject = {
  [key: string]: string;
};

export const NavProfileInfo = () => {
  const info = document.cookie.split("; ").reduce((prev, current) => {
    const [name, value] = current.split("=");
    console.log(name, value);
    prev[decodeURIComponent(name)] = decodeURIComponent(value);
    return prev;
  }, {} as cookieObject);

  const { name, banner, avatar, email } = info;

  console.log(info);

  return (
    <div>
      {!name ? (
        <>
          <Link href="/auth/register">Register</Link> /
          <Link href="/auth/login">Login</Link>
        </>
      ) : (
        <Link href={`/profile/${name}`}>
          <span className="text-red-300 font-bold">{name}</span>
        </Link>
      )}
    </div>
  );
};
