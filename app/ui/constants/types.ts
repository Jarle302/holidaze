export type formPage = 1 | 2 | 3;

export type Profile = {
  name: string;
  email: string;
  bio: string;
  avatar: {
    url: string;
    alt: string;
  };
  banner: {
    url: string;
    alt: string;
  };
  venueManager: boolean;
  _count: {
    venues: number;
    bookings: number;
  };
};

export type Booking = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  customer: {
    name: string;
    email: string;
    bio: string;
    avatar: {
      url: string;
      alt: string;
    };
    banner: Banner;
  };
};

export type BookingWithVenue = Booking & { venue: Venue };

type Banner = {
  url: string;
  alt: string;
};

type Image = {
  url: string;
  alt: string;
};

export type mediaObject = {
  url: string;
  alt: string;
};
type media = mediaObject[];

type meta = {
  parking: boolean;
  wifi: boolean;
  breakfast: boolean;
  pets: boolean;
};

type location = {
  address: string;
  zip: string;
  country: string;
  continent: string;
  lat: number;
  lng: number;
  city: string;
};

export type Venue = {
  id: string;
  name: string;
  price: number;
  maxGuests: number;
  description: string;
  media: media;
  meta: meta;
  location: location;
};
export type FormState = {
  name: string | undefined;
  price: number | undefined;
  maxGuests: number | undefined;
  description: string | undefined;
  breakfast: boolean;
  wifi: boolean;
  pets: boolean;
  parking: boolean;
  url: string;
  alt: string;
  address: string;
  country: string;
  city: string;
  zip: string;
  continent: string;
  lat: number;
  lng: number;
  media: media;
};

export type Owner = {
  name: string;
  email: string;
  bio: string;
  avatar: {
    url: string;
    alt: string;
  };
  banner: {
    url: string;
    alt: string;
  };
};

export type registerVenueData = {
  name: string | undefined;
  price: number | undefined;
  maxGuests: number | undefined;
  description: string | undefined;
  media: media;
  meta: meta;
  location: location;
};

export type VenueCardProps = Venue & {
  id: string;
  bookings?: Booking[];
  owner?: Owner;
};

export type cookieObject = {
  [key: string]: string;
};

export type UserInfo = {
  name: string;
  email: string;
  avatar: Image;
  banner: Image;
  bio: string;
  venueManager: false;
};

export type VenueWithAllParams = {
  id: string;
  name: string;
  description: string;
  media: Image[];
  price: number;
  maxGuests: number;
  rating: number;
  created: string;
  updated: string;
  meta: Meta;
  location: location;
  owner: Owner;
  bookings: Booking[];
};

type Meta = {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
};
