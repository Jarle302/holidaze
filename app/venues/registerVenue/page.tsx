import { RegisterVenueForm } from "@/app/ui/components/RegisterVenueForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holidaze | Register Venue",
  description:
    "Register your venue on Holidaze. Reach out to a global audience and provide unforgettable holiday experiences. Join our network of venue managers today.",
};

export default function RegisterVenue() {
  return (
    <div className="overflow-hidden">
      <RegisterVenueForm />
    </div>
  );
}
