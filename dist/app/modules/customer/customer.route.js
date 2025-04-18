"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const validateRequest_1 = __importDefault(require("../../../middlewires/validateRequest"));
const customer_validation_1 = require("./customer.validation");
exports.CustomerRoutes = (0, express_1.default)();
exports.CustomerRoutes.post("/", (0, validateRequest_1.default)(customer_validation_1.CustomerValidation.createCustomer), customer_controller_1.CustomerController.createCustomer);
exports.CustomerRoutes.get("/", customer_controller_1.CustomerController.getAllCustomer);
exports.CustomerRoutes.get("/:id", customer_controller_1.CustomerController.getByIdFromDB);
exports.CustomerRoutes.put("/:id", (0, validateRequest_1.default)(customer_validation_1.CustomerValidation.updateCustomerSchema), customer_controller_1.CustomerController.updateCustomer);
exports.CustomerRoutes.delete("/:id", customer_controller_1.CustomerController.deleteCustomer);
