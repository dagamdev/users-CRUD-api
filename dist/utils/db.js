"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.db = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: config_1.envConfig.db.dbHost,
    username: config_1.envConfig.db.userName,
    password: config_1.envConfig.db.password,
    database: config_1.envConfig.db.dbName,
    dialectOptions: process.env.NODE_ENV === 'production' ? {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    } : {}
});
