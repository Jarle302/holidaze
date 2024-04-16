import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { AnimatedLogo } from "../animatedLogo";
export const Header: FC = () => {
  return (
    <header className="p-3 text-red-300 bg-white">
      <nav className="w-full flex justify-between">
        <AnimatedLogo />
        <ul className={"flex flex-col sm:flex-row sm:items-center "}>
          <Link href="/auth/register">Register</Link>/
          <Link href="/auth/login">Login</Link>
        </ul>
      </nav>
    </header>
  );
};
