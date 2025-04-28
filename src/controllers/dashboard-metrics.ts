import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function dashboardMetricsController(req: Request, res: Response) {
  try {
    const count = await prisma.customer.count({
      where: {
        disabledAt: null,
      },
    });


    res.send({ count });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
    return;
  }
}
