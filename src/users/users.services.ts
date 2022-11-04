import { Request, Response } from "express"
import controllers from "./users.controllers";
import { sendError, sendResponse } from "../utils/functions";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await controllers.getAllUsers()
    sendResponse(res, 200, users)

  } catch (error) {
    sendError(res, error)
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, birthday } = req.body
    if(!firstName || !lastName || !email || !password || !birthday) return sendResponse(res, 404, {
      message: 'All fields must be completed',
      fields: {
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        password: 'string',
        birthday: 'YYYY/MM/DD'
      }
    })

    const data = await controllers.createUser({ firstName, lastName, email, password, birthday })
    sendResponse(res, 201, data)

  } catch (error) {
    sendError(res, error)
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params, user = await controllers.getUserById(id)
    if(user) sendResponse(res, 200, user)
    else sendResponse(res, 404, {message: 'Invalid id'})

  } catch (error) {
    sendError(res, error)
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params, { firstName, lastName, email, password, birthday } = req.body
    if(!firstName && !lastName && !email && !password && !birthday) return sendResponse(res, 404, {
      message: 'All fields must be completed',
      fields: {
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        password: 'string',
        birthday: 'YYYY/MM/DD'
      }
    })

    const data = await controllers.updateUser(id, { firstName, lastName, email, password, birthday })
    sendResponse(res, 200, {data})

  } catch (error) {
    sendError(res, error)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params, data = await controllers.deleteUser(id)
    sendResponse(res, 204, {status: data})

  } catch (error) {
    sendError(res, error)
  }
}