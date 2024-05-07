import { VenueCard } from "../VenueCard";
import { Venue, Booking } from "../../constants/types";
type bookings = { bookings: Booking[] };

export const VenueList = async () => {
  const endpoint = encodeURIComponent("holidaze/venues?_bookings=true");

  const response = await fetch(
    `http://localhost:3000/auth?endpoint=${endpoint}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await response.json();
  console.log("this is the data", data);

  const cards = data.data.map((venue: Venue & bookings) => (
    <VenueCard key={venue.name} {...venue} />
  ));

  return cards;
};
