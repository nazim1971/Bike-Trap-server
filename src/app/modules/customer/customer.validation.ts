import { z } from "zod";

const createCustomer = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  phone: z.string(),
});

export const updateCustomerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").optional(),
    phone: z.string().optional(),
  }).strict();


export const CustomerValidation = {
  createCustomer,
  updateCustomerSchema
};
