import { VenueDetails } from "@/app/venues/singleVenue/[id]/components/VenueDetails";
import { registerVenueData, FormState } from "../constants/types";

export default function convertToformState(
  venuedata: registerVenueData
): FormState {
  const { location, meta, ...rest } = venuedata;
  const editableFormData = {
    ...rest,
    url: venuedata.media[0].url,
    alt: venuedata.media[0].alt,
    parking: venuedata.meta.parking,
    wifi: meta.wifi,
    breakfast: meta.breakfast,
    pets: meta.pets,
    address: location.address,
    country: location.country,
    city: location.city,
    continent: location.continent,
    zip: location.zip,
    lat: location.lat,
    lng: location.lng,
  };

  return editableFormData;
}
