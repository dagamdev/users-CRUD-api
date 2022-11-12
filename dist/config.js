"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// const PV = process.env
// const sss = PV.JWT_SECRET
const PV = process.env;
exports.envConfig = {
    port: PV.PORT || 2468,
    nodeEnv: PV.NODE_ENV || 'development',
    host: PV.HOST,
    domain: PV.DOMAIN,
    db: {
        dbHost: PV.DB_HOST || 'localhost',
        userName: PV.DB_USER || 'postgres',
        password: PV.DB_PASSWORD || 'root',
        dbName: PV.DB_NAME
    }
};
