import { Venue, Booking, Owner } from "@/app/ui/constants/types";
import boolToYesNo from "@/app/ui/utils/boolToYesNo";
import Link from "next/link";
import { CustomLi } from "./CustomLi";
export const VenueDetails = ({
  venue,
}: {
  venue: Venue & { owner: Owner; bookings: Booking[] };
}) => {
  if (!venue || Object.keys(venue).length === 0) {
    throw new Error("404, venue not found");
  }

  const { maxGuests, price } = venue || "";
  const { country, city } = venue?.location || "";
  const { wifi, parking, pets, breakfast } = venue?.meta || "";

  return (
    <ul className="max-w-[500px] border-2 border-zinc-500 rounded-lg py-2">
      <CustomLi category="Max guests">{maxGuests}</CustomLi>
      <CustomLi index={1} category="Price">
        {price}
      </CustomLi>
      <CustomLi category="Country">{country}</CustomLi>
      <CustomLi index={1} category="City">
        {city}
      </CustomLi>
      <CustomLi category="Breakfast">{boolToYesNo(breakfast)}</CustomLi>
      <CustomLi index={1} category="Wifi">
        {boolToYesNo(wifi)}
      </CustomLi>
      <CustomLi category="Pets">{boolToYesNo(pets)}</CustomLi>
      <CustomLi index={1} category="Parking">
        {boolToYesNo(parking)}
      </CustomLi>
      <Link
        href={`/profile/${venue.owner.name}`}
        className="flex justify-between px-2">
        Host <span className="text-red-300 font-bold">{venue.owner.name}</span>
      </Link>
    </ul>
  );
};
