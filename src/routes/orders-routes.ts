import { OrdersController } from "@/controllers/orders-controllers";
import { Router } from "express";

const ordersRoutes = Router()
const ordersController = new OrdersController()

ordersRoutes.post("/", ordersController.create)
ordersRoutes.get("/table-session/:table_session_id", ordersController.index) //listar muitos registros
ordersRoutes.get("/table-session/:table_session_id/total", ordersController.show)//mostrar registro específico


export { ordersRoutes }