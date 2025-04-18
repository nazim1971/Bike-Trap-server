"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const client_1 = require("@prisma/client");
const StatusFullError_1 = require("../app/error/StatusFullError");
// ✅ Explicit typing
const globalErrorHandler = (error, req, res, next) => {
    var _a;
    if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025") {
        res.status(http_status_1.default.NOT_FOUND).json({
            success: false,
            status: 404,
            message: ((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause) || "Resource not found",
            stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
        });
        return;
    }
    if (error instanceof StatusFullError_1.StatusFullError) {
        res.status(error.status).json({
            success: error.success,
            status: error.status,
            message: error.message,
            stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
        });
        return;
    }
    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
        success: false,
        status: http_status_1.default.INTERNAL_SERVER_ERROR,
        message: (error === null || error === void 0 ? void 0 : error.message) || "Something went wrong",
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
};
exports.globalErrorHandler = globalErrorHandler;
