import { Booking } from "@/app/ui/constants/types";
import { VenueBooking } from "./VenueBooking";
export const VenueBookings = ({
  bookings,
  name,
}: { bookings: Booking[] } & { name?: string }) => {
  const venueBookings = bookings.map((booking) => (
    <VenueBooking {...booking} key={booking.id} />
  ));
  return (
    <div className="bg-zinc-200 p-4 rounded-lg w-full">
      {name && (
        <h3 className="text-2xl font-bold text-zinc-800 p-3">{`Bookings for  ${name}`}</h3>
      )}
      <div className="overflow-y-auto h-[450px] gap-2  flex flex-col gap-4">
        {venueBookings}
      </div>
    </div>
  );
};
