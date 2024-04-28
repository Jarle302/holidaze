import { VenueCard } from "../ui/components/VenueCard";

export default function Venues() {
  return (
    <div>
      <VenueCard
        name="Venue Name"
        price={100}
        maxGuests={50}
        description="Venue Description"
        media={[
          {
            url: "https://images.unsplash.com/photo-1713769931183-1537d9a8126b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "",
          },
          {
            url: "https://images.unsplash.com/photo-1713528197377-53e99d3b6b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "",
          },
        ]}
        meta={{
          parking: false,
          wifi: false,
          breakfast: false,
          pets: false,
        }}
        location={{
          address: "",
          zip: "",
          country: "",
          continent: "",
          lat: 0,
          lng: 0,
        }}
        id={"dsgsdg"}
        bookings={[
          {
            id: "b1",
            dateFrom: "2024-05-06T09:48:50Z",
            dateTo: "2024-05-09T09:48:50Z",
            guests: 2,
            created: "2024-04-26T09:48:50Z",
            updated: "2024-05-26T09:48:50Z",
            customer: {
              name: "Alice Johnson",
              email: "alice@example.com",
              bio: "Enthusiastic traveler and photographer.",
              avatar: {
                url: "https://url.com/alice_avatar.jpg",
                alt: "Alice Johnson's profile picture",
              },
              banner: {
                url: "https://url.com/alice_banner.jpg",
                alt: "Alice exploring the mountains",
              },
            },
          },
          {
            id: "b1dsf",
            dateFrom: "2024-06-20T09:48:50Z",
            dateTo: "2024-06-23T09:48:50Z",
            guests: 2,
            created: "2024-04-26T09:48:50Z",
            updated: "2024-05-26T09:48:50Z",
            customer: {
              name: "Alice Johnson",
              email: "alice@example.com",
              bio: "Enthusiastic traveler and photographer.",
              avatar: {
                url: "https://url.com/alice_avatar.jpg",
                alt: "Alice Johnson's profile picture",
              },
              banner: {
                url: "https://url.com/alice_banner.jpg",
                alt: "Alice exploring the mountains",
              },
            },
          },
        ]}
      />
    </div>
  );
}
