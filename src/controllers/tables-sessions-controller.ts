import { knexConfig } from '@/database/knex'
import { AppError } from '@/utils/AppError'
import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

class TablesSessionsController {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                table_id: z.number()
            })

            const { table_id } = bodySchema.parse(request.body)

            const sessions = await knexConfig<TablesSessionsRepository>("tables_sessions").where({ table_id }).orderBy("opened_at", "desc").first()

            if (sessions && !sessions.closed_at) {
                throw new AppError("There is already an open session for this table.")
            }

            await knexConfig<TablesSessionsRepository>("tables_sessions").insert({ table_id, opened_at: knexConfig.fn.now() })

            return response.status(201).json()
        } catch (error) {
            next(error)
        }
    }
}

export { TablesSessionsController }