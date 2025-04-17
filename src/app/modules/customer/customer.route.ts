import Router from "express";
import { CustomerController } from "./customer.controller";
import validateRequest from "../../../middlewires/validateRequest";
import { CustomerValidation } from "./customer.validation";

export const CustomerRoutes = Router();

CustomerRoutes.post(
  "/",
  validateRequest(CustomerValidation.createCustomer),
  CustomerController.createCustomer
);

CustomerRoutes.get("/", CustomerController.getAllCustomer);

CustomerRoutes.get("/:id", CustomerController.getByIdFromDB);

CustomerRoutes.put(
  "/:id",
  validateRequest(CustomerValidation.updateCustomerSchema),
  CustomerController.updateCustomer
);

CustomerRoutes.delete("/:id", CustomerController.deleteCustomer);