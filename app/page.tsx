import { VenueList } from "@/app/ui/components/VenueList";
import { Search } from "./ui/components/Search";
import { VenueCard } from "./ui/components/VenueCard";
export default function Venues() {
  return (
    <main className="flex flex-wrap gap-4 justify-center sm:justify-start">
      <h1 className="bg-zinc-300 text-red-300 text-[50px] md:text-[100px] font-bold w-full">
        Venues
      </h1>
      <Search RenderComponent={VenueCard} />
      <VenueList />
    </main>
  );
}
