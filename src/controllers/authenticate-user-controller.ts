import { Request, Response } from "express";
import { authenticateUserSchema } from "../schemas/authenticate-user-schema";
import { ZodError } from "zod";
import { prisma } from "../lib/prisma";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken"

export async function authenticateUserController(req: Request, res: Response) {
  try {
    const { email, password } = authenticateUserSchema.parse(req.body)

    const user = await prisma.user.findUnique({ 
      where: {email},
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: {
                      select: {
                        name: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })

    if(!user) {
      res.status(401).send({message: "email/senha inválidos"})
      return
    }

    const isPasswordValid =  compare(password, user.password)

    if (!isPasswordValid) {
      res.status(401).send({message: "email/senha inválidos"})
      return
    }

    const accessToken = jwt.sign({
      sub: user.id,
      roles: user.roles.map(role => role.role.name),
      permissions: user.roles.map(role => role.role.permissions.map(permission => permission.permission.name))
    }, 
    "IKNFABFUIABVFUIOAVBFUIOAVBFUIOAVWIOFVY8IOEVFYAVFIYVSDF78T3ER5T6234FGV5YUVB", 
    {
      expiresIn: "5h"
    })

    res.status(200).send({ accessToken })

  } catch (error) {
    if (error instanceof ZodError) {
       res.status(400).json({ errors: error.flatten().fieldErrors })
    }

     console.error("Erro no /authenticate:", error)
     res.status(500).send("Internal Server Error")
  }
}