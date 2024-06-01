"use client";

import Link from "next/link";
import { userInfoContext } from "../UseInfoProvider";
import { useContext } from "react";
import { LogOutButton } from "../Header/LogOutButton";
import { IoHomeSharp, IoLogOutSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

export const NavProfileInfo = () => {
  const user = useContext(userInfoContext);
  console.log({ user });
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link className="flex" href="/">
            <IoHomeSharp />
            Home
          </Link>
        </li>
        {!user?.userInfo?.name ? (
          <>
            <li>
              <Link href="/auth/register">Register</Link>
            </li>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="flex" href={`/profile/${user?.userInfo?.name}`}>
                <FaUser />
                <span className="text-red-300 font-bold">
                  {user?.userInfo?.name}
                </span>
              </Link>
            </li>
            <li className="flex">
              <IoLogOutSharp />
              <LogOutButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
