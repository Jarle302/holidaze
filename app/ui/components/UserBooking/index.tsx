import { BookingWithVenue } from "@/app/ui/constants/types";
export const UserBooking = ({
  dateFrom,
  dateTo,
  created,
  guests,
  updated,
  venue,
}: BookingWithVenue) => {
  return (
    <div className="flex justify-between bg-zinc-200 rounded-md max-w-[800px]">
      <div className="h-[120px] w-[120px] rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={venue.media[0].url}
          alt={venue.media[0].alt}
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{venue.name}</h3>
        <p>{venue.location?.city}</p>
        <p>{venue.location?.address}</p>
      </div>
      <div className="flex-col justify-evenly">
        <p className="font-bold">{dateTo.split("T")[0]}</p>
        <p className="font-bold">{dateFrom.split("T")[0]}</p>
      </div>
      <button className="p-3 bg-red-300">Edit</button>
    </div>
  );
};
