import { TablesController } from "@/controllers/tables-controller";
import { Router } from "express";

const tablesRoutes = Router()
const tablesController = new TablesController()

tablesController.get("/", tablesController.index)

export { tablesRoutes }