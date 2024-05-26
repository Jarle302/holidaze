import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .email("wrong email")
    .endsWith("stud.noroff.no", "email must end with stud.noroff.no"),
  password: z.string().min(8, "password must be atleat 4 characters"),
  bio: z.string().max(159, "bio must be less than 160 characters"),
  avatarUrl: z.string().url("must be a valid url").optional(),
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
