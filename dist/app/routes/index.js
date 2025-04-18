"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_route_1 = require("../modules/customer/customer.route");
const bike_route_1 = require("../modules/bike/bike.route");
const service_route_1 = require("../modules/service/service.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/customers",
        route: customer_route_1.CustomerRoutes,
    },
    {
        path: "/bikes",
        route: bike_route_1.BikeRoutes,
    },
    {
        path: "/services",
        route: service_route_1.ServiceRoutes,
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
