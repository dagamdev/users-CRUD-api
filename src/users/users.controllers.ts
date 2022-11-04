import { Users } from "../models/users.model";
import { v4 } from "uuid"
import { UserData } from "../utils/types";

const getAllUsers = () => Users.findAll({where: {status: 'active'}})

const createUser = (data: UserData) => Users.create({
  id: v4(),
  ...data
})

const getUserById = (id: string) => Users.findOne({where: {id, status: 'active'}})

const updateUser = (id: string, data: UserData) => Users.update(data, {where: {id, status: 'active'}})

const deleteUser = (id: string) => Users.update({status: 'inactive'}, {where: {id, status: 'active'}})

export default { 
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
}