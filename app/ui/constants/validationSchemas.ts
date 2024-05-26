import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .email("wrong email")
    .endsWith("stud.noroff.no", "email must end with stud.noroff.no"),
  password: z.string().min(4, "password must be atleat 4 characters"),
  bio: z.string().optional(),
  avatarUrl: z.string().url("must be a valid url").optional(),
  avatarAlt: z.string().optional(),
  bannerUrl: z.string().url("must be a valid url").optional(),
  bannerAlt: z.string().optional(),
  venueManager: z.boolean().optional(),
});
