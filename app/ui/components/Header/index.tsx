import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
export const Header: FC = () => {
  return (
    <header className="p-3 text-red-300 bg-white">
      <nav className="w-full flex justify-between">
        <Image
          className="w-[60px]"
          src="/stampLogo.webp"
          alt="Holidaze logo, in the form of a post stamp"
          height={1024}
          width={1024}
        />
        <ul className={"flex flex-col sm:flex-row sm:items-center "}>
          <Link href="#">Register</Link>/<Link href="#">Login</Link>
        </ul>
      </nav>
    </header>
  );
};
