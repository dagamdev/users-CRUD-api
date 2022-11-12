"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = require("../models/users.model");
const uuid_1 = require("uuid");
const getAllUsers = () => users_model_1.Users.findAll({
    where: { status: 'active' },
    attributes: {
        exclude: ['status', 'createdAt', 'updatedAt']
    }
});
const createUser = (data) => users_model_1.Users.create(Object.assign({ id: (0, uuid_1.v4)() }, data));
const getUserById = (id) => users_model_1.Users.findOne({
    where: { id, status: 'active' },
    attributes: {
        exclude: ['status', 'createdAt', 'updatedAt']
    }
});
const updateUser = (id, data) => users_model_1.Users.update(data, { where: { id, status: 'active' } });
const deleteUser = (id) => users_model_1.Users.update({ status: 'inactive' }, { where: { id, status: 'active' } });
exports.default = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
