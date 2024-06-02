import { LoginForm } from "@/app/ui/components/LoginFormNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holidaze | Login",
  description:
    "Log in to your Holidaze account to explore and book unique holiday experiences. Don't have an account? Sign up to start your unforgettable journey.",
};

export default function Login() {
  return (
    <section className="bg--login h-[full] min-h-[90vh] flex items-start flex-col justify-end p-4">
      <LoginForm />
    </section>
  );
}
