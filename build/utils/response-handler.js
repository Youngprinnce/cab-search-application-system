"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccessY = void 0;
const sendSuccessY = (response, message, code) => {
    const resp = {
        status: 'success',
        message,
    };
    return response.status(code).json(resp);
};
exports.sendSuccessY = sendSuccessY;
//# sourceMappingURL=response-handler.js.map