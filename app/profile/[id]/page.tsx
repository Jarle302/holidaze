import createProxyUrl from "@/app/ui/utils/api/createProxyUrl";
import SingleProfilePage from "../SingleProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holidaze | Profile",
  description:
    "Explore the unique profile on Holidaze. Discover their favorite holiday experiences, reviews, and more. Connect and start your unforgettable journey today.",
};

export default async function SingleProfile({
  params,
}: {
  params: { id: string };
}) {
  const url = createProxyUrl(`holidaze/profiles/${params.id}`);

  const response = await fetch(url);
  const data = await response.json();
  return <SingleProfilePage id={params.id} />;
}
