import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Prisma } from "@prisma/client";
import { StatusFullError } from "../app/error/StatusFullError";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Prisma Record Not Found
  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2025"
  ) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      status: 404,
      message: error.meta?.cause || "Resource not found",
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }

  // Custom StatusFullError
  if (error instanceof StatusFullError) {
    return res.status(error.status).json({
      success: error.success,
      status: error.status,
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }

  // Default error handler
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: httpStatus.INTERNAL_SERVER_ERROR,
    message: error?.message || "Something went wrong",
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
