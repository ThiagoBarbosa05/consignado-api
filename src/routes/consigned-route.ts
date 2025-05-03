import { Router } from "express";
import { authenticate } from "../middleware.ts/authenticate";
import { checkPermission } from "../middleware.ts/check-permissions";
import { createConsignedController } from "../controllers/create-consigned";
import { listConsignedController } from "../controllers/list-consigned";
import { getConsignedController } from "../controllers/get-consigned";

export const consignedRoute = Router();

consignedRoute.post(
  "/consigned",
  authenticate,
  checkPermission("create:wine"),
  createConsignedController
);

consignedRoute.get(
  "/consigned",
  authenticate,
  checkPermission("read:wine"),
  listConsignedController
);

consignedRoute.get(
  "/consigned/:id",
  authenticate,
  checkPermission("read:wine"),
  getConsignedController
);
