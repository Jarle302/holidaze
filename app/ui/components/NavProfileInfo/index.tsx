"use client";

import Link from "next/link";
import { userInfoContext } from "../UseInfoProvider";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { LogOutButton } from "../Header/LogOutButton";
import { IoHomeSharp, IoLogOutSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

export const NavProfileInfo = () => {
  const path = usePathname();
  const user = useContext(userInfoContext);
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link
            className={
              path === `/` ? "text--green rounded-lg p-1 flex" : "flex"
            }
            href="/">
            <IoHomeSharp />
            Home
          </Link>
        </li>
        {!user?.userInfo?.name ? (
          <>
            <li>
              <Link
                className={path === "/auth/register" ? "text--green p-1" : ""}
                href="/auth/register">
                Register
              </Link>
            </li>
            <li>
              <Link
                className={path === "/auth/login" ? "text--green" : ""}
                href="/auth/login">
                Login
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                className={
                  path === `/profile/${user?.userInfo?.name}`
                    ? "text--green rounded-lg p-1 flex"
                    : "flex text-red-300 font-bold"
                }
                href={`/profile/${user?.userInfo?.name}`}>
                <FaUser />
                <span>{user?.userInfo?.name}</span>
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
