"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = exports.sendSuccessY = exports.sendSuccess = void 0;
const sendSuccess = (response, message, code, data) => {
    const resp = {
        status: 'success',
        message,
        data,
    };
    return response.status(code).json(resp);
};
exports.sendSuccess = sendSuccess;
const sendSuccessY = (response, message, code) => {
    const resp = {
        status: 'success',
        message,
    };
    return response.status(code).json(resp);
};
exports.sendSuccessY = sendSuccessY;
const sendError = (response, reason, code) => {
    const resp = {
        status: 'failure',
        reason,
    };
    return response.status(code).json(resp);
};
exports.sendError = sendError;
//# sourceMappingURL=response-handler.js.map