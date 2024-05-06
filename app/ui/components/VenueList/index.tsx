import { VenueCard } from "../VenueCard";
import { Venue, Booking } from "../../constants/types";

type bookings = { bookings: Booking[] };
export const VenueList = async () => {
  const url = process.env.siteUrl;
  const response = await fetch(url as string, {
    method: "GET",
    credentials: "include",
  });
  const data = await response.json();
  console.log("venueListDATA:", data);
  const cards = data.data.map((venue: Venue & bookings) => (
    <VenueCard key={venue.name} {...venue} />
  ));

  return cards;
};
