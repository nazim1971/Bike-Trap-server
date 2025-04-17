import { NextFunction, Request, Response } from "express";
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

  const getAllService = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceRecordService.getAllService();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  });
  
  const getServiceById = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
      const result = await ServiceRecordService.getServiceById(id);
      if (!result) {
        return sendResponse(res, {
          statusCode: httpStatus.NOT_FOUND,
          success: false,
          message: "Service record  is not found",
          data: result,
        });
      }
      return sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result,
      });
    }
  );


  const markServiceAsCompleted = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { completionDate } = req.body ?? {};
  
    const result = await ServiceRecordService.markServiceAsCompleted(id, completionDate);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  });
  

  export const ServiceController = {
createService,
getAllService,
getServiceById,
markServiceAsCompleted
  }