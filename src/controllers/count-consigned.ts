import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { countWineSchema } from "../schemas/count-wine-scheme";
import { ZodError } from "zod";

export async function countWineOnConsignedController(
  req: Request,
  res: Response
) {
  try {
    const { counts, customerId } = countWineSchema.parse(req.body);
    const { id } = req.params;

    await prisma.$transaction(async (tx) => {
      counts.map((count) =>
        prisma.wineOnConsigned.update({
          where: {
            consignedId_wineId: {
              wineId: count.wineId,
              consignedId: id,
            },
          },
          data: {
            count: count.quantity,
            consigned: {
              update: {
                completedIn: new Date(),
                status: "CONCLUÍDO",
              },
            },
          },
        })
      );
    });

    const updatedWines = await prisma.wineOnConsigned.findMany({
      where: {
        consignedId: id,
      },
      include: {
        wines: true,
        consigned: true,
      },
    });

    console.log(updatedWines);

    res.send();
    return;
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ errors: error.flatten().fieldErrors });
      return;
    }
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
    return;
  }
}
