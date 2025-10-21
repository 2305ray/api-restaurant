import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";

export class ProductController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {

            return response.json({ message: "ok" })
        } catch (error) {
            next(error)
        }
    }
}