import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { NavProfileInfo } from "../NavProfileInfo";

export const Header: FC = () => {
  return (
    <header className="p-3 text-red-300 bg-white flex justify-between items-center w-full">
      <Link href="/">
        <Image
          className="w-[100px]"
          src="/logo.png"
          alt="Holidaze logo, in the form of a post stamp"
          height={1024}
          width={1024}
        />
      </Link>

      <NavProfileInfo />
    </header>
  );
};
