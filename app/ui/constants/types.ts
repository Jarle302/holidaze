export type formPage = 1 | 2 | 3;

type mediaObject = {
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
};

export type FormData = {
  name: string;
  price: number;
  maxGuests: number;
  description: string;
  media: media;
  meta: meta;
  location: location;
};
export type FormState = {
  name: string,
  price: number,
  maxGuests: number,
  description: string,
  breakfast: boolean,
  wifi: boolean,
  pets: boolean,
  parking: boolean,
  url: string,
  alt: string,
  address: string,
  country: string,
  city: string,
  zip: string,
  continent: string,
  lat: number,
  lng: number,
};
