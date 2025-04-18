"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const serviceZodSchema = zod_1.z.object({
    bikeId: zod_1.z.string().uuid({ message: "Invalid bikeId format" }),
    serviceDate: zod_1.z.string(),
    description: zod_1.z.string().min(1, { message: "Description is required" }),
    status: zod_1.z.enum(["pending", "in_progress", "done"]),
});
const markServiceCompleteSchema = zod_1.z.object({
    completionDate: zod_1.z.coerce.date().optional(),
});
exports.ServiceValidation = {
    serviceZodSchema,
    markServiceCompleteSchema
};
