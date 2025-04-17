import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import httpStatus from "http-status";
import { BikeServices } from "./bike.service";

const createBike = catchAsync(async (req: Request, res: Response) => {
  const { customerId, ...bikeData } = req.body;
  const result = await BikeServices.createBike(customerId, bikeData);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike created successfully",
    data: result,
  });
});

const getAllBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeServices.getALlBike();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getBikeById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await BikeServices.getBikeById(id);
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: "Bike is not found",
        data: result,
      });
    }
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bike fetched successfully",
      data: result,
    });
  }
);

export const BikeController = {
  createBike,
  getBikeById,
  getAllBike,
};
