import { Request, Response, Router } from "express";
import { authenticateUserSchema } from "../schemas/authenticate-user-schema";
import { ZodError } from "zod";
import { authenticateUserController } from "../controllers/authenticate-user-controller";
import { createUserController } from "../controllers/create-user";
import { authenticate } from "../middleware.ts/authenticate";
import { checkPermission } from "../middleware.ts/check-permissions";
import { listRolesController } from "../controllers/list-roles";

export const userRoute = Router()

userRoute.post("/authenticate", authenticateUserController)
userRoute.post("/users", authenticate, checkPermission("create:user"),createUserController)
userRoute.get("/users/roles", authenticate, checkPermission("read:roles"), listRolesController)