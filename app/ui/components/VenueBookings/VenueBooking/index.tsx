import { Booking } from "@/app/ui/constants/types";
import Link from "next/link";
export const VenueBooking = ({
  customer,
  dateFrom,
  dateTo,
  guests,
}: Booking) => {
  return (
    <div className="flex justify-between bg-zinc-100 rounded-md w-full px-4">
      <div className="h-[120px] w-[120px] rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={customer.avatar.url}
          alt={customer.avatar.alt}
        />
      </div>
      <div className="flex-col flex justify-evenly">
        <Link href={`/profile/${customer.name}`}>
          <h4 className="text-2xl font-bold">{customer.name}</h4>{" "}
        </Link>
        <p>{customer.email}</p>
      </div>
      <div className="flex-col flex justify-evenly">
        <p className="font-bold text-zinc-800">{dateTo.split("T")[0]}</p>
        <p className="font-bold text-zinc-600">{dateFrom.split("T")[0]}</p>
      </div>
    </div>
  );
};
