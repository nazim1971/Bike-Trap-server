import { serviceRecord } from "@prisma/client";

import prisma from "../../shared/prisma";
import { TService } from "./service.interface";

const createService = async (bikeId: string, data: TService) => {
  await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId,
    },
  });

  const result = await prisma.serviceRecord.create({
    data: {
      description: data.description,
      serviceDate: data.serviceDate,
      status: data.status,
      bike: {
        connect: { bikeId },
      },
    },
  });

  return result;
};

const getAllService = async () => {
  const result = await prisma.serviceRecord.findMany({
    orderBy: {
      serviceDate: "desc",
    },
  });
  return result;
};

const getServiceById = async (id: string): Promise<serviceRecord | null> => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });

  return result;
};

const markServiceAsCompleted = async (
  serviceId: string,
  completionDate?: string
) => {
  const completedAt = completionDate ?? new Date().toISOString();

  const result = await prisma.serviceRecord.update({
    where: { serviceId },
    data: {
      status: "done",
      completionDate: completedAt,
    },
  });

  return result;
};

  const getOverdueOrPendingServices = async () => {
    const result = await prisma.serviceRecord.findMany({
        where: {
            status: {
                in: ["pending", "in_progress"],  // Filter for status
            },
            serviceDate: {
                lte: new Date(new Date().setDate(new Date().getDate() - 7)),  // Service date older than 7 days
            },
        },
    });
    return result;
};


export const ServiceRecordService = {
  createService,
  getAllService,
  getServiceById,
  markServiceAsCompleted,
  getOverdueOrPendingServices,
};
