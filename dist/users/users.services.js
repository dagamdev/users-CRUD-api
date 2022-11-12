"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.createUser = exports.getAllUsers = void 0;
const users_controllers_1 = __importDefault(require("./users.controllers"));
const functions_1 = require("../utils/functions");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_controllers_1.default.getAllUsers();
        (0, functions_1.sendResponse)(res, 200, users);
    }
    catch (error) {
        (0, functions_1.sendError)(res, error);
    }
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password, birthday } = req.body;
        if (!firstName || !lastName || !email || !password || !birthday)
            return (0, functions_1.sendResponse)(res, 404, {
                message: 'All fields must be completed',
                fields: {
                    firstName: 'string',
                    lastName: 'string',
                    email: 'string',
                    password: 'string',
                    birthday: 'YYYY/MM/DD'
                }
            });
        const data = yield users_controllers_1.default.createUser({ firstName, lastName, email, password, birthday });
        (0, functions_1.sendResponse)(res, 201, data);
    }
    catch (error) {
        (0, functions_1.sendError)(res, error);
    }
});
exports.createUser = createUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params, user = yield users_controllers_1.default.getUserById(id);
        if (user)
            (0, functions_1.sendResponse)(res, 200, user);
        else
            (0, functions_1.sendResponse)(res, 404, { message: 'Invalid id' });
    }
    catch (error) {
        (0, functions_1.sendError)(res, error);
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params, { firstName, lastName, email, password, birthday } = req.body;
        if (!firstName && !lastName && !email && !password && !birthday)
            return (0, functions_1.sendResponse)(res, 404, {
                message: 'All fields must be completed',
                fields: {
                    firstName: 'string',
                    lastName: 'string',
                    email: 'string',
                    password: 'string',
                    birthday: 'YYYY/MM/DD'
                }
            });
        const data = yield users_controllers_1.default.updateUser(id, { firstName, lastName, email, password, birthday });
        (0, functions_1.sendResponse)(res, 200, { data });
    }
    catch (error) {
        (0, functions_1.sendError)(res, error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params, data = yield users_controllers_1.default.deleteUser(id);
        (0, functions_1.sendResponse)(res, 204, { status: data });
    }
    catch (error) {
        (0, functions_1.sendError)(res, error);
    }
});
exports.deleteUser = deleteUser;
