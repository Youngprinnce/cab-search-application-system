"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_config_1 = __importDefault(require("../../config/router-config"));
const utils_1 = require("../../utils");
router_config_1.default.get('/', (req, res) => (0, utils_1.sendSuccessY)(res, 'Cab Search Application Backend Service API', 200));
exports.default = router_config_1.default;
//# sourceMappingURL=index.js.map