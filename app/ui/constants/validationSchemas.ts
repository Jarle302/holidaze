import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must consist of letters",
    required_error: "Name is required",
  }),
  email: z
    .string({
      invalid_type_error: "Email must consist of letters",
      required_error: "Email is required",
    })
    .email("Please enter a valid email, wrong email or password")
    .endsWith("stud.noroff.no", "email must end with stud.noroff.no"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "password must be at least 8 characters"),
  bio: z.string().max(159, "bio must be less than 160 characters"),
  avatarUrl: z.string().url("must be a valid url"),
  avatarAlt: z
    .string()
    .max(119, "bio must be less than 120 characters")
    .optional(),
  bannerUrl: z.string().url("must be a valid url").optional(),
  bannerAlt: z
    .string()
    .max(119, "bio must be less than 120 characters")
    .optional(),
  venueManager: z.boolean().optional(),
});

const mediaSchema = z.object({
  url: z.string().url("must be a  valid accessible url").optional(),
  alt: z.string().optional(),
});

export const RegisterVenueSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must consist of letters",
    required_error: "Name is required",
  }),
  description: z.string({
    invalid_type_error: "Description must consist of letters",
    required_error: "Description is required",
  }),
  media: z
    .array(mediaSchema)
    .max(8, "You cannot have more than 8 images")
    .optional(),
  price: z
    .number({
      invalid_type_error: "Price must be a number",
      required_error: "Price is required",
    })
    .min(0, "Price cant be less than 0")
    .max(10_000, "Price cannot be greater than 10,000"),
  maxGuests: z
    .number({
      invalid_type_error: "Max guests must be a number",
      required_error: "Max guests is required",
    })
    .int("Max guests must be a whole number")
    .min(1, "A venue must accommodate at least one guest")
    .max(100, "A venue cannot accommodate more than 100 guests"),
  rating: z
    .number({
      invalid_type_error: "Rating must be a number",
    })
    .min(0, "Rating cannot be less than 0")
    .max(5, "Rating cannot be greater than 5")
    .optional(),
  wifi: z.boolean().default(false).optional(),
  parking: z.boolean().default(false).optional(),
  pets: z.boolean().default(false).optional(),
  breakfast: z.boolean().default(false).optional(),
  alt: z
    .string({ invalid_type_error: "Description must consist of letters" })
    .nullish(),
  address: z
    .string({ invalid_type_error: "Address must consist of letters" })
    .nullish(),
  city: z
    .string({ invalid_type_error: "City must consist of letters" })
    .nullish(),
  continent: z
    .string({ invalid_type_error: "Continent must consist of letters" })
    .nullish(),
  zip: z
    .string({ invalid_type_error: "Zip must consist of letters" })
    .nullish(),
  lat: z
    .number()
    .min(-90, "Latitude must be between -90 and 90")
    .max(90, "Latitude must be between -90 and 90")
    .nullish(),
  lng: z
    .number()
    .min(-90, "Longitude must be between -90 and 90")
    .max(90, "Longitude must be between -90 and 90")
    .nullish(),
});

export const addImage = z.string({}).url("must be a valid url");
