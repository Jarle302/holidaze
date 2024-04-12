import { LoginForm } from "@/app/ui/components/LoginForm";
import Image from "next/image";
import { FC } from "react";

export default function Login() {
  return (
    <section className="bg--login h-[90vh] flex items-start flex-col justify-between p-8">
      <Image
        className="ml-auto self-start w-[80px]"
        src="/stampLogo.webp"
        alt="Holidaze logo, in the form of a post stamp"
        height={1024}
        width={1024}
      />
      <LoginForm />
    </section>
  );
}
