"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
console.log(config_1.envConfig);
app_1.app.listen(config_1.envConfig.port, () => {
    console.log('Server is runing in port:', config_1.envConfig.port);
});
