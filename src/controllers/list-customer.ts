import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function listCustomersController(req: Request, res: Response) {
  try {
    const customers = await prisma.customer.findMany(
      {
        select: {
          id: true,
          name: true,
          contactPerson: true,
          email: true,
          cellphone: true,
          businessPhone: true
        },
        where: { disabledAt: null }
      }
    )

    res.status(200).send({ customers })
    return
  } catch (error) {
    console.log(error)
    res.status(500).send({message: "Internal Server Error"})
    return
  }
}