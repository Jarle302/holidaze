"use client";
import createProxyUrl from "@/app/ui/utils/api/createProxyUrl";
import { useEffect, useState } from "react";
import SafeGetProp from "@/app/ui/utils/SafeGetProp";
import { Profile, Venue } from "@/app/ui/constants/types";
import { ProfileInfo } from "./ProfileInfo";
import { VenueCard } from "@/app/ui/components/VenueCard";
export default function SingleProfilePage({ id }: { id: string }) {
  const url = createProxyUrl(`holidaze/profiles/${id}`);
  const urlTwo = createProxyUrl(`holidaze/profiles/${id}/venues?_owner=true`);
  // const urlThree = createProxyUrl(`holidaze/profiles/${id}/bookings`);
  const emptyProfile: Profile = {
    name: "",
    email: "",
    bio: "",
    avatar: {
      url: "",
      alt: "",
    },
    banner: {
      url: "",
      alt: "",
    },
    venueManager: false,
    _count: {
      venues: 0,
      bookings: 0,
    },
  };
  const rating = 2;
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [venues, setVenues] = useState<Venue[]>();
  //  const [bookings, setBookings] = useState<Venue[]>(null);
  useEffect(() => {
    (async function fetchMany() {
      const [profileData, venueData] = await Promise.all([
        fetch(url),
        fetch(urlTwo),
        //  fetch(urlThree),
      ]);

      const data1 = await profileData.json();
      const data2 = await venueData.json();
      // const data3 = await bookingData.json();

      setProfile(data1.data);
      setVenues(data2.data);
      console.log({ data1 }, { data2 });
    })();
  }, []);
  let cards;
  if (venues && venues?.length > 0) {
    cards = venues?.map((venue: Venue) => (
      <VenueCard key={venue.name} {...venue} />
    ));
  }
  const props = { ...profile, rating };
  return (
    <main className="flex flex-col gap-4 max-w-[1300px] m-auto">
      <section className="flex flex-col">
        <ProfileInfo {...props} />
      </section>
      <section className="bg-zinc-300 p-8 ">
        <h2 className="font-bold text-2xl">Bio </h2>
        <p>
          {SafeGetProp(
            profile,
            "bio",
            "This user hasn't written a bio yet. They might be a mystery, but that just makes them all the more interesting!"
          )}
        </p>
      </section>
      <section className="flex flex-wrap p-8 gap-4 w-full ">
        <h2 className="text-2xl font-bold text-red-300 w-full bg-zinc-1">
          Venues
        </h2>
        {cards}
      </section>
    </main>
  );
}
