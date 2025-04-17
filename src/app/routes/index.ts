import { Router } from "express";
import { CustomerRoutes } from "../modules/customer/customer.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: CustomerRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
