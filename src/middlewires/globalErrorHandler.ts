import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Prisma } from "@prisma/client";
import { StatusFullError } from "../app/error/StatusFullError";

// ✅ Explicit typing
export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2025"
  ) {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      status: 404,
      message: error.meta?.cause || "Resource not found",
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
    return;
  }

  if (error instanceof StatusFullError) {
    res.status(error.status).json({
      success: error.success,
      status: error.status,
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
    return;
  }

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: httpStatus.INTERNAL_SERVER_ERROR,
    message: error?.message || "Something went wrong",
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
