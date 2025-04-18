"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerValidation = exports.updateCustomerSchema = void 0;
const zod_1 = require("zod");
const createCustomer = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: "Name is required" })
        .min(2, "Name must be at least 2 characters"),
    email: zod_1.z
        .string({ required_error: "Email is required" })
        .email("Invalid email address"),
    phone: zod_1.z.string().optional(),
});
exports.updateCustomerSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name must be at least 2 characters").optional(),
    phone: zod_1.z.string().optional(),
}).strict();
exports.CustomerValidation = {
    createCustomer,
    updateCustomerSchema: exports.updateCustomerSchema
};
