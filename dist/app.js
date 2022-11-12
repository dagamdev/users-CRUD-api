"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefix = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./utils/db");
const config_1 = require("./config");
const users_routes_1 = require("./users/users.routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
exports.app = (0, express_1.default)(), exports.prefix = '/api/v1/';
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
db_1.db.authenticate()
    .then(() => console.log('DB autenticated'))
    .catch((error) => console.log(error));
db_1.db.sync()
    .then(() => console.log('DB synced'))
    .catch((error) => console.log(error));
require("./models/users.model");
exports.app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
exports.app.use(exports.prefix + 'users', users_routes_1.router);
exports.app.get('/', (req, res) => {
    res.status(200).send({
        message: 'ok',
        users: `https://${config_1.envConfig.domain}${config_1.envConfig.port}${exports.prefix}users`,
        doc: `https://${config_1.envConfig.domain}/api/docs`
    });
});
