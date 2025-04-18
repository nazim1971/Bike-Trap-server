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
exports.ServiceRecordService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createService = (bikeId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.bike.findUniqueOrThrow({
        where: {
            bikeId,
        },
    });
    const result = yield prisma_1.default.serviceRecord.create({
        data: {
            description: data.description,
            serviceDate: data.serviceDate,
            status: data.status,
            bike: {
                connect: { bikeId },
            },
        },
    });
    return result;
});
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany({
        orderBy: {
            serviceDate: "desc",
        },
    });
    return result;
});
const getServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const markServiceAsCompleted = (serviceId, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    const completedAt = completionDate !== null && completionDate !== void 0 ? completionDate : new Date().toISOString();
    const result = yield prisma_1.default.serviceRecord.update({
        where: { serviceId },
        data: {
            status: "done",
            completionDate: completedAt,
        },
    });
    return result;
});
const getOverdueOrPendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ["pending", "in_progress"], // Filter for status
            },
            serviceDate: {
                lte: new Date(new Date().setDate(new Date().getDate() - 7)), // Service date older than 7 days
            },
        },
    });
    return result;
});
exports.ServiceRecordService = {
    createService,
    getAllService,
    getServiceById,
    markServiceAsCompleted,
    getOverdueOrPendingServices,
};
