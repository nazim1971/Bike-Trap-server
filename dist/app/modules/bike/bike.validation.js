"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeValidation = void 0;
const zod_1 = require("zod");
const createBikeSchema = zod_1.z.object({
    brand: zod_1.z
        .string({ required_error: "Brand is required" })
        .min(1, "Brand cannot be empty"),
    model: zod_1.z
        .string({ required_error: "Model is required" })
        .min(1, "Model cannot be empty"),
    year: zod_1.z
        .number({ required_error: "Year is required" })
        .int("Year must be an integer")
        .gte(1900, "Year must be 1900 or later")
        .lte(new Date().getFullYear(), "Year cannot be in the future"),
    customerId: zod_1.z
        .string({ required_error: "Customer ID is required" })
        .uuid("Customer ID must be a valid UUID"),
});
exports.BikeValidation = {
    createBikeSchema,
};
