import { VenueList } from "@/app/ui/components/VenueList";
import { Search } from "./ui/components/Search";
import { VenueCard } from "./ui/components/VenueCard";
export default function Venues() {
  return (
    <main className="flex flex-wrap gap-4 justify-center sm:justify-start">
      <h1 className="text-slate-600   text-[50px] md:text-[100px] font-bold w-full">
        Holidaze
      </h1>

      <h2 className="text-4xl text-slate-700 font-bold">Venues</h2>
      <Search RenderComponent={VenueCard} />
      <VenueList />
    </main>
  );
}
