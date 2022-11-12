"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const users_services_1 = require("./users.services");
exports.router = (0, express_1.Router)();
exports.router.route('/')
    .get(users_services_1.getAllUsers)
    .post(users_services_1.createUser);
exports.router.route('/:id')
    .get(users_services_1.getUserById)
    .put(users_services_1.updateUser)
    .delete(users_services_1.deleteUser);
