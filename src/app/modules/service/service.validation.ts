import { z } from "zod";

const serviceZodSchema = z.object({
  bikeId: z.string().uuid({ message: "Invalid bikeId format" }),
  serviceDate: z.string(),
  description: z.string().min(1, { message: "Description is required" }),
  status: z.enum(["pending", "in_progress", "done"]),
});

export const ServiceValidation = {
    serviceZodSchema
}