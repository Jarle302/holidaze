import { Venue, Booking, Owner } from "@/app/ui/constants/types";
import { baseUrl } from "@/app/ui/constants/constants";
import { Carousel } from "@/app/ui/components/Carousel";
import { VenueDetails } from "./components/VenueDetails";
import { VenueBooker } from "./components/VenueBooker";
export default async function Page({ params }: { params: { id: string } }) {
  const data: { data: Venue & { owner: Owner; bookings: Booking[] } } =
    await fetch(
      `${baseUrl}holidaze/venues/${params.id}?_owner=true&_bookings=true`
    ).then((res) => res.json());

  const { name, description, media, bookings } = data.data;

  return (
    <main className="bg-zinc-200 md:p-[40px] p-[20px] flex flex-wrap gap-5">
      <h1 className="text-[50px]  w-full text-red-300 font-bold">{name}</h1>
      <div className="flex flex-col max-w-[500px] gap-5">
        <div className="p-3 bg-white max-h-max max-w-max">
          <Carousel fitToContainer={true} media={media} />
        </div>
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-5">
        <VenueBooker bookings={bookings} />
        <VenueDetails venue={data.data} />
      </div>
    </main>
  );
}
