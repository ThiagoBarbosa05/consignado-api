import { Router } from "express";

import { authenticateUserController } from "../controllers/authenticate-user-controller";
import { createUserController } from "../controllers/create-user";
import { authenticate } from "../middleware.ts/authenticate";
import { checkPermission } from "../middleware.ts/check-permissions";
import { listRolesController } from "../controllers/list-roles";
import { listUsersController } from "../controllers/list-users";

export const userRoute = Router()

userRoute.post("/authenticate", authenticateUserController)
userRoute.post("/users", authenticate, checkPermission("create:user"),createUserController)
userRoute.get("/users/roles", authenticate, checkPermission("read:roles"), listRolesController)
userRoute.get("/users", authenticate, checkPermission("read:users"), listUsersController)