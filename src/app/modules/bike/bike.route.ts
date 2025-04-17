import { BikeController } from "./bike.controller";
import validateRequest from "../../../middlewires/validateRequest";
import { BikeValidation } from "./bike.validation";
import { Router } from "express";

export const BikeRoutes = Router();

BikeRoutes.post(
  "/",
  validateRequest(BikeValidation.createBikeSchema),
  BikeController.createBike
);
BikeRoutes.get("/", BikeController.getAllBike);

BikeRoutes.get("/:id", BikeController.getBikeById);
