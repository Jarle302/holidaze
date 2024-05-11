import { FormState } from "../constants/types";

export default function formDataToVenue(formState: FormState) {
  let {
    address,
    city,
    zip,
    country,
    continent,
    lat,
    lng,
    parking,
    wifi,
    pets,
    breakfast,
    url,
    alt,
    ...tempData
  } = formState;
  const Venue = {
    ...tempData,
    location: { lat, lng, continent, city, zip, country, address },
    meta: { wifi, breakfast, parking, pets },
  };
  return Venue;
}
