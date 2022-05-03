"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Error Handler Class
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
function throwError(message, statusCode) {
    throw new ErrorHandler(message, statusCode);
}
exports.default = throwError;
//# sourceMappingURL=handle-error.js.map