import { Router } from "express";
import { authenticate } from "../middleware.ts/authenticate";
import { checkPermission } from "../middleware.ts/check-permissions";
import { createConsignedController } from "../controllers/create-consigned";

export const consignedRoute = Router();

consignedRoute.post(
  "/consigned",
  authenticate,
  checkPermission("create:wine"),
  createConsignedController
);
