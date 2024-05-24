import { RegisterVenueForm } from "@/app/ui/components/RegisterVenueForm";
import { baseUrl } from "@/app/ui/constants/constants";
export default async function UpdateVenue({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(`${baseUrl}holidaze/venues/${params.id}`);
  const data = await response.json();
  console.log({ data });
  return <RegisterVenueForm venueData={data.data} />;
}
