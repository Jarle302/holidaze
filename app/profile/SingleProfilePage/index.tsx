"use client";
import createProxyUrl from "@/app/ui/utils/api/createProxyUrl";
import { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { UserBooking } from "@/app/ui/components/UserBooking";
import { userInfoContext } from "@/app/ui/components/UseInfoProvider";
import SafeGetProp from "@/app/ui/utils/SafeGetProp";
import { AvatarUpdater } from "@/app/ui/components/AvatarUpdater";
import { useFormState } from "react-dom";
import UpdateAvatarAction from "@/app/ui/utils/api/UpdateAvatar";
import {
  Profile,
  BookingWithVenue,
  VenueWithAllParams,
} from "@/app/ui/constants/types";
import { ProfileInfo } from "./ProfileInfo";
import { VenueCard } from "@/app/ui/components/VenueCard";
import Link from "next/link";
import { VenueBookings } from "@/app/ui/components/VenueBookings";
export default function SingleProfilePage({ id }: { id: string }) {
  const [state, action] = useFormState(UpdateAvatarAction, null);
  const tempUser = useContext(userInfoContext);
  const url = createProxyUrl(`holidaze/profiles/${id}`);
  const urlTwo = createProxyUrl(
    `holidaze/profiles/${id}/venues?_owner=true&_bookings=true`
  );
  const urlThree = createProxyUrl(
    `holidaze/profiles/${id}/bookings?_owner=true&_venue=true`
  );
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

  const rating = 2; //FIX
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [venues, setVenues] = useState<VenueWithAllParams[]>();
  const [bookings, setBookings] = useState<BookingWithVenue[]>();
  useEffect(() => {
    (async function fetchMany() {
      const [profileData, venueData, bookingData] = await Promise.all([
        fetch(url),
        fetch(urlTwo),
        fetch(urlThree),
      ]);

      const data1 = await profileData.json();
      const data2 = await venueData.json();
      const data3 = await bookingData.json();

      setProfile(data1.data);
      setVenues(data2.data);
      setBookings(data3.data);
      console.log({ data1 }, { data2 }, { data3 });
    })();
  }, []);
  useEffect(() => {
    let user;
    if (tempUser !== undefined && profile.name) {
      user = tempUser;

      user?.userInfo.name === profile.name && setIsOwnProfile(true);
      console.log(isOwnProfile, "isOWN PROFILE????");
    }
  }, [profile]);
  let cards;
  if (profile?.venueManager && venues && venues?.length > 0) {
    cards = venues?.map((venue: VenueWithAllParams) => (
      <div key={venue.id} className="flex-col">
        <VenueCard isOwner={isOwnProfile} key={venue.name} {...venue} />
        {isOwnProfile && (
          <VenueBookings
            key={venue.id + venue.name}
            name={venue.name}
            bookings={venue.bookings}
          />
        )}
      </div>
    ));
  }
  const props = { ...profile, rating };
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <main className="flex flex-col gap-4 max-w-[1300px] m-auto bg-zinc-100">
      <section className="flex flex-col">
        <ProfileInfo {...props} />
        <div className="p-8 flex gap-4">
          {isOwnProfile && (
            <>
              {" "}
              <button
                className="p-2 bg-zinc-200 text-red-300 font-bold border border-bg-red-300 border-2 rounded-lg"
                onClick={() => modalRef.current?.showModal()}>
                Change avatar
              </button>
              <dialog
                ref={modalRef}
                className="p-2 h-[300px] bg-zinc-300 rounded-lg border border-4 border-zinc-800">
                <button onClick={() => modalRef.current?.close()}>Close</button>

                <AvatarUpdater
                  name={profile.name}
                  updateAvatar={action}
                  errorArray={state}
                />
              </dialog>
            </>
          )}{" "}
          {isOwnProfile && tempUser?.userInfo?.venueManager && (
            <Link
              className="p-3 bg-red-300 text-zinc-800 rounded-lg"
              href="/venues/registerVenue">
              Add new Venue
            </Link>
          )}{" "}
        </div>
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

      {profile.venueManager && (
        <section className="flex flex-wrap gap-4 w-full ">
          <h2 className="text-2xl font-bold text-red-300 w-full bg-zinc-1">
            {isOwnProfile ? "Your venues" : "Venues"}
          </h2>

          {cards}
        </section>
      )}
      {isOwnProfile && (
        <section className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-red-300 ">
            {" "}
            Your Upcoming bookings
          </h2>{" "}
          {bookings &&
            bookings.map((booking) => {
              return <UserBooking key={booking.id} {...booking} />;
            })}
        </section>
      )}
    </main>
  );
}
