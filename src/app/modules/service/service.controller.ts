import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import httpStatus from 'http-status'
import { ServiceRecordService } from "./service.service";

const createService = catchAsync(async (req: Request, res: Response) => {
    const { bikeId, ...serviceData } = req.body;
    const result = await ServiceRecordService.createService(bikeId, serviceData);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Service record created successfully",
      data: result,
    });
  });

  export const ServiceController = {
createService
  }