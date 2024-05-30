"use client";

import { Booking } from "@/app/ui/constants/types";
import { useContext, useEffect, useState } from "react";
import { userInfoContext } from "@/app/ui/components/UseInfoProvider";
import { VenueBookings } from "@/app/ui/components/VenueBookings";
export const UseClientVenueBookings = ({
  bookings,
  owner,
}: { bookings: Booking[] } & { owner: string }) => {
  const user = useContext(userInfoContext);
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    if (user !== undefined && owner === user.userInfo.name) {
      setIsOwner(true);
    }
  }, []);

  return (
    <>
      {isOwner && (
        <section className="w-full">
          {" "}
          <h2 className="w-full text-2xl">Bookings</h2>{" "}
          <VenueBookings bookings={bookings} />{" "}
        </section>
      )}
    </>
  );
};
