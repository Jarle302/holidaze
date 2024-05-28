import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { NavProfileInfo } from "../NavProfileInfo";
import LogOut from "../../utils/Logout";
import { LogOutButton } from "./LogOutButton";
export const Header: FC = () => {
  return (
    <header className="p-3 text-red-300 bg-white">
      <Link href="/">
        <Image
          className="w-[60px]"
          src="/stampLogo.webp"
          alt="Holidaze logo, in the form of a post stamp"
          height={1024}
          width={1024}
        />
      </Link>
      <nav className="w-full flex justify-between">
        <ul className={"flex flex-col sm:flex-row sm:items-center "}>
          <NavProfileInfo />
        </ul>
      </nav>
    </header>
  );
};
