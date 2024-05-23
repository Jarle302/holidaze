"use client";
import createProxyUrl from "@/app/ui/utils/api/createProxyUrl";
import { useEffect, useState } from "react";
import SafeGetProp from "@/app/ui/utils/SafeGetProp";
import { Profile, Venue } from "@/app/ui/constants/types";
import { ProfileInfo } from "./ProfileInfo";
import { VenueCard } from "@/app/ui/components/VenueCard";
export default function SingleProfilePage({ id }: { id: string }) {
  const url = createProxyUrl(`holidaze/profiles/${id}`);
  const urlTwo = createProxyUrl(`holidaze/profiles/${id}/venues`);
  const urlThree = createProxyUrl(`holidaze/profiles/${id}/bookings`);
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
  const [venues, setVenues] = useState<Venue[]>(null);
  const [bookings, setBookings] = useState<Venue[]>(null);
  useEffect(() => {
    async function fetchMany() {
      const [profileData, venueData, bookingData] = await promise.All([
        fetch(url),
        fetch(urlTwo),
        fetch(urlThree),
      ]);

      const data1 = await profileData.json();
      const data2 = await venueData.json();
      const data3 = await bookingData.json();

      setProfile(data1);
      setVenues(data2);
    }
  }, []);
  let cards = [];
  if (venues.length > 0) {
    cards = venues?.data?.map((venue: Venue) => (
      <VenueCard key={venue.name} {...venue} />
    ));
  }
  const props = { ...profile, rating };
  return (
    <main>
      <section className="flex flex-col">
        <ProfileInfo {...props} />
      </section>
      <section>
        <h2>Bio </h2>
        <p>
          {SafeGetProp(
            profile,
            "bio",
            "This user hasn't written a bio yet. They might be a mystery, but that just makes them all the more interesting!"
          )}
        </p>
      </section>
      <section>
        <h2>Venues</h2>
        {cards}
      </section>
    </main>
  );
}
