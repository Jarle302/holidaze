import { RegisterForm } from "@/app/ui/components/RegisterFormNew";

export default function Register() {
  return (
    <section className="sm:h-[90vh] flex flex-col items-center justify-center gap-4">
      <h1>Register</h1>
      <RegisterForm />
    </section>
  );
}
