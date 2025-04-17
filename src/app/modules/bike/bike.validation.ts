import { z } from "zod";

const createBikeSchema = z.object({
  brand: z
    .string({ required_error: "Brand is required" })
    .min(1, "Brand cannot be empty"),
  model: z
    .string({ required_error: "Model is required" })
    .min(1, "Model cannot be empty"),
  year: z
    .number({ required_error: "Year is required" })
    .int("Year must be an integer")
    .gte(1900, "Year must be 1900 or later")
    .lte(new Date().getFullYear(), "Year cannot be in the future"),
  customerId: z
    .string({ required_error: "Customer ID is required" })
    .uuid("Customer ID must be a valid UUID"),
});

export const BikeValidation = {
  createBikeSchema,
};
