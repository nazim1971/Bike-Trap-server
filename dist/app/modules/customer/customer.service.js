"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const StatusFullError_1 = require("../../error/StatusFullError");
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = yield prisma_1.default.customer.create({
        data: {
            name: data.name,
            email: data.email,
            phone: data.phone || "",
        },
    });
    return customerData;
});
const getALlCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
});
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    return result;
});
const updateCustomer = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    const result = yield prisma_1.default.customer.update({
        where: {
            customerId: id,
        },
        data,
    });
    return result;
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    if (!customer) {
        throw new StatusFullError_1.StatusFullError({
            name: "NotFoundError",
            message: "Customer not found",
            status: 404,
            path: `/api/customers/${id}`,
        });
    }
    const result = yield prisma_1.default.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.CustomerServices = {
    createCustomer,
    getALlCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};
