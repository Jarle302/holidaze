import { VenueCard } from "../VenueCard";
import { Venue, Booking } from "../../constants/types";
type bookings = { bookings: Booking[] };

export const VenueList = async () => {
  const endpoint = encodeURIComponent(
    "holidaze/venues?_bookings=true&_owner=true&sort=created&sortOrder=desc"
  );

  try {
    const response = await fetch(
      `https://holidazejarle.netlify.app/auth?endpoint=${endpoint}`,
      {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      }
    );

    const data = await response.json();

    const cards = data.data.map((venue: Venue & bookings) => (
      <VenueCard key={venue.name} {...venue} />
    ));

    return cards;
  } catch (error) {
    console.log(error);
  }
};
