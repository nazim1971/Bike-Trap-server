
import { Router } from "express";
import validateRequest from "../../../middlewires/validateRequest";
import { ServiceValidation } from "./service.validation";
import { ServiceController } from "./service.controller";

export const ServiceRoutes = Router();

ServiceRoutes.post(
  "/",
  validateRequest(ServiceValidation.serviceZodSchema), ServiceController.createService
);

ServiceRoutes.get("/", ServiceController.getAllService);

ServiceRoutes.get("/:id", ServiceController.getServiceById);

ServiceRoutes.put("/:id/complete", ServiceController.markServiceAsCompleted);
