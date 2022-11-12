"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = exports.sendResponse = void 0;
const sendResponse = (res, status, data) => res.status(status).json(data);
exports.sendResponse = sendResponse;
const sendError = (res, error, status = 400) => res.status(status).json({ message: error });
exports.sendError = sendError;
