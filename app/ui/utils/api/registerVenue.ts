import { registerVenueData } from "../../constants/types";
import configureFetch from "../configureFetch";
import createProxyUrl from "./createProxyUrl";

export default async function registerVenue(formState: registerVenueData) {
  const url = createProxyUrl("/holidaze/venues");
  const options = configureFetch("POST", formState);

  const response = await fetch(url, options as RequestInit);
  const data = await response.json();
  return data;
}
