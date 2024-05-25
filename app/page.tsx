import { VenueList } from "@/app/ui/components/VenueList";
import { Search } from "./ui/components/Search";
import { VenueCard } from "./ui/components/VenueCard";
export default function Venues() {
  return (
    <main className="flex flex-wrap gap-5">
      <h1 className="bg-zinc-300 text-red-300 text-[50px] md:text-[100px] font-bold p-4 w-full">
        Venues
      </h1>
      <Search className={"w-full"} RenderComponent={VenueCard} />
      <VenueList />
    </main>
  );
}
