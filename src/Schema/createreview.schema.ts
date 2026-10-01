import { z } from "zod";

export const createReviewSchema = z.object({
  review: z
    .string()
    .min(3, "Review must be at least 3 characters"),

  rating: z
    .number()
    .min(1, "Please select a rating")
    .max(5, "Rating must be between 1 and 5"),
});