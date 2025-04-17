import { ServiceStatus } from "@prisma/client";

export type TService = {
    bikeId: string;
    serviceDate: string;
    description: string;
    status: ServiceStatus
}