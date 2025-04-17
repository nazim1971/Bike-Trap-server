import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import httpStatus from "http-status";
import { CustomerServices } from "./customer.service";

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerServices.createCustomer(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerServices.getALlCustomer();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getByIdFromDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await CustomerServices.getCustomerById(id);
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: "Customer is not found",
        data: result,
      });
    }
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Customer fetched successfully",
      data: result,
    });
  }
);

const updateCustomer = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
  
      const result = await CustomerServices.updateCustomer(id, req.body);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer updated successfully",
        data: result,
      });
    }
  );

  const deleteCustomer = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
  
      const result = await CustomerServices.deleteCustomer(id);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer deleted successfully"
      });
    }
  );

export const CustomerController = {
  createCustomer,
  getAllCustomer,
  getByIdFromDB,
  updateCustomer,
  deleteCustomer
};
