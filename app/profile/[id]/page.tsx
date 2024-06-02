import createProxyUrl from "@/app/ui/utils/api/createProxyUrl";
import SingleProfilePage from "../SingleProfilePage";
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
