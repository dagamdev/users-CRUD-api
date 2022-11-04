import { Response } from "express"

export const sendResponse = (res: Response, status: number, data: object) => res.status(status).json(data)

export const sendError = (res: Response, error: unknown, status = 400) => res.status(status).json({message: error})