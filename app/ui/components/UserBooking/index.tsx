import { BookingWithVenue } from "@/app/ui/constants/types";
import Link from "next/link";
export const UserBooking = ({
  dateFrom,
  dateTo,
  created,
  guests,
  updated,
  venue,
  venueId,
}: BookingWithVenue & { venueId: string }) => {
  return (
    <div className="flex justify-between bg-zinc-200 rounded-md max-w-[800px]">
      <div className="h-[120px] w-[120px] rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={venue?.media[0]?.url || "/stampLogo.webp"}
          alt={venue?.media[0]?.alt || "Missing image description"}
        />
      </div>
      <div>
        <Link href={`/venues/singleVenue/${venueId}`}>
          <h3 className="text-2xl font-bold">{venue.name}</h3>
        </Link>
        <p>{venue.location?.city}</p>
        <p>{venue.location?.address}</p>
      </div>
      <div className="flex-col justify-evenly">
        <p className="font-bold">{dateTo.split("T")[0]}</p>
        <p className="font-bold">{dateFrom.split("T")[0]}</p>
      </div>
    </div>
  );
};
