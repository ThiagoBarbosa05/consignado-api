import { Router } from "express";

import { createCustomerController } from "../controllers/create-customer";
import { listCustomersController } from "../controllers/list-customer";
import { getCustomerDetailsController } from "../controllers/get-customer-details";
import { updateCustomerController } from "../controllers/update-customer";
import { disableCustomerController } from "../controllers/disable-customer";
import { dashboardMetricsController } from "../controllers/dashboard-metrics";

export const customerRouter = Router()

customerRouter.post("/customers", createCustomerController)
customerRouter.get("/customers", listCustomersController)
customerRouter.get("/customers/:id", getCustomerDetailsController)
customerRouter.put("/customers/:id", updateCustomerController)
customerRouter.patch("/customers/:id", disableCustomerController)


