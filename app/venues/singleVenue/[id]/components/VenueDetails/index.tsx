import { Venue, Booking, Owner } from "@/app/ui/constants/types";
import boolToYesNo from "@/app/ui/utils/boolToYesNo";
import { CustomLi } from "./CustomLi";
export const VenueDetails = ({
  venue,
}: {
  venue: Venue & { owner: Owner; bookings: Booking[] };
}) => {
  return (
    <ul className="max-w-[500px] border-2 border-zinc-500 rounded-lg py-2">
      <CustomLi category="Max guests">{venue.maxGuests}</CustomLi>
      <CustomLi index={1} category="Price">
        {venue.price}
      </CustomLi>
      <CustomLi category="Country">{venue.location.country}</CustomLi>
      <CustomLi index={1} category="City">
        {venue.location.city}
      </CustomLi>
      <CustomLi category="Breakfast">
        {boolToYesNo(venue.meta.breakfast)}
      </CustomLi>
      <CustomLi index={1} category="Wifi">
        {boolToYesNo(venue.meta.wifi)}
      </CustomLi>
      <CustomLi category="Pets">{boolToYesNo(venue.meta.pets)}</CustomLi>
      <CustomLi index={1} category="Parking">
        {boolToYesNo(venue.meta.parking)}
      </CustomLi>
    </ul>
  );
};
