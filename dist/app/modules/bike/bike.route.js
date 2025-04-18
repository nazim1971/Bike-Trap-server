"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const bike_controller_1 = require("./bike.controller");
const validateRequest_1 = __importDefault(require("../../../middlewires/validateRequest"));
const bike_validation_1 = require("./bike.validation");
const express_1 = require("express");
exports.BikeRoutes = (0, express_1.Router)();
exports.BikeRoutes.post("/", (0, validateRequest_1.default)(bike_validation_1.BikeValidation.createBikeSchema), bike_controller_1.BikeController.createBike);
exports.BikeRoutes.get("/", bike_controller_1.BikeController.getAllBike);
exports.BikeRoutes.get("/:id", bike_controller_1.BikeController.getBikeById);
