import { LoginForm } from "@/app/ui/components/LoginFormNew";
import Image from "next/image";
import { FC } from "react";

export default function Login() {
  return (
    <section className="bg--login h-[full] min-h-[90vh] flex items-start flex-col justify-end p-4">
      <LoginForm />
    </section>
  );
}
