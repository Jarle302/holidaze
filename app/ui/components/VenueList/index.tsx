import { VenueCard } from "../VenueCard";

export const VenueList = async () => {
  const response = await fetch(
    "http://localhost:3000/auth?endpoint=holidaze/bookings",
    { method: "GET", credentials: "include" }
  );
  const data = await response.json();
  console.log("venueListDATA:", data);
  const cards = data.data.map((venue) => <VenueCard key={venue.id} {...venue} />);

  return cards;
};
