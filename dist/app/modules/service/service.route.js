"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../../middlewires/validateRequest"));
const service_validation_1 = require("./service.validation");
const service_controller_1 = require("./service.controller");
exports.ServiceRoutes = (0, express_1.Router)();
exports.ServiceRoutes.post("/", (0, validateRequest_1.default)(service_validation_1.ServiceValidation.serviceZodSchema), service_controller_1.ServiceController.createService);
exports.ServiceRoutes.get("/", service_controller_1.ServiceController.getAllService);
exports.ServiceRoutes.get("/:id", service_controller_1.ServiceController.getServiceById);
exports.ServiceRoutes.put("/:id/complete", service_controller_1.ServiceController.markServiceAsCompleted);
