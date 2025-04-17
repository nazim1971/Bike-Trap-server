import { bike } from "@prisma/client";
import prisma from "../../shared/prisma";
import { TBike } from "./bike.interface";

const createBike = async (customerId: string, data: TBike) => {
    await prisma.customer.findUniqueOrThrow({
        where: {
            customerId,
        },
    });

    const result = await prisma.bike.create({
        data: {
            brand: data.brand,
            model: data.model,
            year: data.year,
            customer: {
              connect: { customerId },
            },
          },
    });

    return result;
};

const getALlBike = async () => {
    const result = await prisma.bike.findMany({
      orderBy: {
        year: "desc",
      },
    });
    return result;
  };

  const getBikeById = async (id: string): Promise<bike | null> => {
    const result = await prisma.bike.findUniqueOrThrow({
      where: {
        bikeId: id,
      },
    });
  
    return result;
  };
  

export const BikeServices = {
  createBike,
  getALlBike,
  getBikeById
};
