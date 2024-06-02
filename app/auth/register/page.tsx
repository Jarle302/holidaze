import { RegisterForm } from "@/app/ui/components/RegisterFormNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holidaze | Register",
  description:
    "Create your Holidaze account to start exploring and booking unique holiday experiences. Join us and start your unforgettable journey today.",
};

export default function Register() {
  return (
    <section className=" flex flex-col items-center justify-center gap-4">
      <RegisterForm />
    </section>
  );
}
