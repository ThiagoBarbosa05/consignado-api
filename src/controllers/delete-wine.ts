import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function deleteWineController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await prisma.wine.delete({
      where: {
        id,
      },
    });

    res.status(204).send({ message: "Vinho deletado com sucesso" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
    return;
  }
}
