import { registerVenueData } from "../../constants/types";
import configureFetch from "../configureFetch";
import createProxyUrl from "./createProxyUrl";

export default async function registerVenue(
  formState: registerVenueData,
  method: string,
  id?: string
) {
  const url = createProxyUrl(`holidaze/venues${id ? "/" + id : ""}`);
  const options = configureFetch(method, formState);
  const response = await fetch(url, options as RequestInit);
  const data = await response.json();
  return data;
}
