import { OrdersController } from "@/controllers/orders-controllers";
import { Router } from "express";

const ordersRoutes = Router()
const ordersController = new OrdersController()

ordersRoutes.post("/", ordersController.create)
ordersRoutes.get("/table-session/:id", ordersController.index)

export { ordersRoutes }