import { Router } from "express";
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from "./users.services";
export const router = Router()

router.route('/')
.get(getAllUsers)
.post(createUser)


router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)