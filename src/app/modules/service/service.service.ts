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

export const ServiceRecordService = {
    createService
};
