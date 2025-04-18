import { customer } from "@prisma/client";
import prisma from "../../shared/prisma";
import { TCustomer } from "./customer.interface";
import { StatusFullError } from "../../error/StatusFullError";

const createCustomer = async (data: TCustomer) => {
  const customerData = await prisma.customer.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone || "",
    },
  });
  return customerData;
};

const getALlCustomer = async () => {
  const result = await prisma.customer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

const getCustomerById = async (id: string): Promise<customer | null> => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  return result;
};

const updateCustomer = async (id: string, data: Partial<TCustomer>) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data,
  });
  return result;
};

const deleteCustomer = async (id: string) => {
  const customer = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  if (!customer) {
    throw new StatusFullError({
      name: "NotFoundError",
      message: "Customer not found",
      status: 404,
      path: `/api/customers/${id}`,
    });
  }

  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });

  return result;
};

export const CustomerServices = {
  createCustomer,
  getALlCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
