import createProxyUrl from "./createProxyUrl";
import configureFetch from "../configureFetch";

export default async function deleteVenue(id: string) {
  const options = configureFetch("DELETE");
  const url = createProxyUrl(`holidaze/venues/${id}`);
  const response = await fetch(url, options as RequestInit);
  const data = await response.json();
  console.log(data);
  return data;
}
