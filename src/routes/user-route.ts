import { Request, Response, Router } from "express";
import { authenticateUserSchema } from "../schemas/authenticate-user-schema";
import { ZodError } from "zod";
import { authenticateUserController } from "../controllers/authenticate-user-controller";

export const userRoute = Router()

userRoute.post("/authenticate", authenticateUserController)