"use client";
import { Venue, Booking, Owner } from "../../constants/types";
import { BookingCalendar } from "../BookingCalendar";
import { useState } from "react";
import { Carousel } from "../Carousel";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { courier } from "@/app/fonts";
import deleteVenue from "../../utils/api/deleteVenue";

type cookieObject = {
  [key: string]: string;
};

const info = document.cookie.split("; ").reduce((prev, current) => {
  const [name, value] = current.split("=");
  console.log(name, value);
  prev[decodeURIComponent(name)] = decodeURIComponent(value);
  return prev;
}, {} as cookieObject);

const { isVenueManager, name: cookieName } = info;

type VenueCardProps = Venue & {
  id: string;
  bookings?: Booking[];
  owner?: Owner;
};
export const VenueCard = ({
  price,
  name,
  id,
  description,
  media,
  bookings,
  owner,
}: VenueCardProps) => {
  gsap.registerPlugin(useGSAP);
  const tl = useRef<gsap.core.Tween>();
  const card = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    // gsap code here...
    tl.current = gsap.to(card.current, {
      duration: 0.3,
      rotationY: 180,
      easing: "elastic.in",
    });
    tl.current.pause();
  }); // <-- automatically reverted

  const isManagerCard = bookings === undefined;
  let userOwnsThisVenue;
  if (owner) {
    userOwnsThisVenue = cookieName === owner.name;
    console.log(userOwnsThisVenue);
  }
  const [showCalendar, setShowCalendar] = useState(false);
  const buttonStyle = "py-2 w-full bg-zinc-200 text-red-300 font-bold";
  return (
    <div
      ref={card}
      className={`w-[300px] bg-white p-2 h-[380px] flex flex-col justify-between overflow-hidden ${courier.className}`}>
      {!showCalendar && (
        <>
          <Link href={`/venues/singleVenue/${id}`}>
            <div className="w-full h-[250px]">
              <Carousel fitToContainer={true} media={media} />
            </div>
            <div>
              <h3 className="text-lg font-bold overflow-hidden whitespace-nowrap truncate">
                {name}
              </h3>
              <p>
                {description.slice(0, 20) +
                  (description.length > 20 ? "..." : "")}
              </p>
              <p>
                <span className="font-bold">{price}</span> a night
              </p>
              <p></p>
            </div>
          </Link>

          {!isManagerCard && (
            <button
              className={buttonStyle}
              onClick={() => {
                tl.current?.restart();
                setShowCalendar((prev) => !prev);
              }}>
              See dates
            </button>
          )}
          {userOwnsThisVenue && (
            <div>
              <button onClick={() => deleteVenue(id)}>Delete</button>
              <Link href={`/venues/singleVenue/update/${id}`}>Update</Link>
            </div>
          )}
        </>
      )}
      {showCalendar && typeof bookings !== "undefined" && (
        <>
          <div className="counter-flip">
            <BookingCalendar bookings={bookings} />
          </div>
          <button
            className={buttonStyle}
            onClick={() => {
              setShowCalendar((prev) => !prev);
              tl.current?.reverse();
            }}>
            Back
          </button>
        </>
      )}
    </div>
  );
};
