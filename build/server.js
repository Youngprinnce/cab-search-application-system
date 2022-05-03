"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const utils_1 = require("./utils");
// Spin server
const server = (0, http_1.createServer)(app_1.default);
server.listen(config_1.PORT, () => utils_1.logger.info(`Server listening on PORT ${config_1.PORT}`));
// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    utils_1.logger.error(err.message);
    utils_1.logger.info('Shutting down due to uncaught exception');
    // Close server & exit process
    server.close(() => process.exit(1));
});
// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    utils_1.logger.error(err.message);
    utils_1.logger.info('Shutting down due to unhandled promise rejection');
    // Close server & exit process
    server.close(() => process.exit(1));
});
exports.default = server;
//# sourceMappingURL=server.js.map