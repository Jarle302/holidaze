import { VenueCard } from "../VenueCard";
import { Venue, Booking } from "../../constants/types";

type bookings = { bookings: Booking[] };
export const VenueList = async () => {
  const baseUrl = process.env.siteUrl;
  if (!baseUrl) {
    throw new Error("baseUrl missing");
  }
  const endpoint = encodeURIComponent("holidaze/bookings");
  const url = `${baseUrl}?endpoint=${endpoint}`;

  const response = await fetch(url, {
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
