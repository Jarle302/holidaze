import { registerVenueData } from "../../constants/types";
import configureFetch from "../configureFetch";
import createProxyUrl from "./createProxyUrl";

export default async function registerVenue(formState: registerVenueData) {
  const url = createProxyUrl("holidaze/venues");
  const options = configureFetch("POST", formState);
  console.log(url);
  const response = await fetch(url, options as RequestInit);
  const data = await response.json();
  console.log("trying to register venue", { data });
  return data;
}
