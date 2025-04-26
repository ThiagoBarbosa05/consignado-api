import { Router } from "express";
import { createCustomerSchema } from "../schemas/create-customer-schema";
import { ZodError } from "zod";

export const customerRouter = Router()

customerRouter.post("/customers", async (req, res) => {
  try {
    const data = createCustomerSchema.parse(req.body)
    return res.send({data})
  } 
  catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send(error.flatten().fieldErrors)
    }
    return res.status(500).send("Internal Server Error")
  }  
})


