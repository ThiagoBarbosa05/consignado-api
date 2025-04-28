import { Request, Response, Router } from "express";
import { authenticateUserSchema } from "../schemas/authenticate-user-schema";
import { ZodError } from "zod";
import { authenticateUserController } from "../controllers/authenticate-user-controller";
import { createUserController } from "../controllers/create-user";

export const userRoute = Router()

userRoute.post("/authenticate", authenticateUserController)
userRoute.post("/users", createUserController)