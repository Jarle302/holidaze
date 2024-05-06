import { VenueCard } from "../VenueCard";
import { Venue, Booking } from "../../constants/types";

type bookings = { bookings: Booking[] };
export const VenueList = async () => {
  let baseUrl = process.env.siteUrl;
  if (!baseUrl) {
    baseUrl = "http://localhost:3000/";
    // throw new Error("baseUrl missing");
  }
  const endpoint = encodeURIComponent("holidaze/venues");
  const url = `${baseUrl}/auth?endpoint=${endpoint}`;
  console.log(url);
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  console.log(response);
  //const data = await response.json();
 // console.log("this is the data", data);
  //console.log("venueListDATA:", data);
  // const cards = data.data.map((venue: Venue & bookings) => (
  // <VenueCard key={venue.name} {...venue} />
  //));

  return <div>yo</div>;
};
