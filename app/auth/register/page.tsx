import { RegisterForm } from "@/app/ui/components/RegisterForm";

export default function Register() {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center gap-4">
      <h1>Register</h1>
      <RegisterForm />
    </section>
  );
}
