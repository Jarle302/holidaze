import { VenueList } from "../ui/components/VenueList";
export default function Venues() {
  return (
    <div className="flex flex-wrap gap-5">
      <h1 className="bg-zinc-300 text-red-300 text-[50px] md:text-[100px] font-bold p-4 w-full">
        Venues
      </h1>
      <VenueList />
    </div>
  );
}
