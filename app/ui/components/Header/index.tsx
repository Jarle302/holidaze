import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { NavProfileInfo } from "../NavProfileInfo";

export const Header: FC = () => {
  return (
    <header className="flex-shrink-0 p-3 text-red-300 bg-slate-700 flex justify-between items-center w-full">
      <Link href="/">
        <Image
          className="w-[100px]"
          src="/logo.png"
          alt="Holidaze logo a cabin, and the text holidaze under"
          height={1024}
          width={1024}
        />
      </Link>

      <NavProfileInfo />
    </header>
  );
};
