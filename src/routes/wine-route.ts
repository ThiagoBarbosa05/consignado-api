import { Router } from "express";
import { authenticate } from "../middleware.ts/authenticate";
import { checkPermission } from "../middleware.ts/check-permissions";
import { createWineController } from "../controllers/create-wine";
import { listWinesController } from "../controllers/list-wines";
import { updateWineController } from "../controllers/update-wine";
import { deleteWineController } from "../controllers/delete-wine";
import { getWine } from "../controllers/get-wine";

export const wineRoute = Router();

wineRoute.post(
  "/wines",
  authenticate,
  checkPermission("create:wine"),
  createWineController
);

wineRoute.get(
  "/wines",
  authenticate,
  checkPermission("create:wine"),
  listWinesController
);

wineRoute.put(
  "/wines/:id",
  authenticate,
  checkPermission("update:wine"),
  updateWineController
);

wineRoute.delete(
  "/wines/:id",
  authenticate,
  checkPermission("delete:wine"),
  deleteWineController
);

wineRoute.get(
  "/wines/:id",
  authenticate,
  checkPermission("read:wine"),
  getWine
);
