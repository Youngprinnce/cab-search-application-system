"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SENDGRID_EMAIL_FROM = exports.SENDGRID_API_KEY = exports.JWT_SECRET_KEY = exports.DATABASE_URL = exports.BASE_URL = exports.NODE_ENV = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT || 5000;
exports.NODE_ENV = process.env.NODE_ENV || 'development';
exports.BASE_URL = process.env.BASE_URL;
exports.DATABASE_URL = String(process.env.DATABASE_URL);
exports.JWT_SECRET_KEY = String(process.env.JWT_SECRET_KEY);
exports.SENDGRID_API_KEY = String(process.env.SENDGRID_API_KEY);
exports.SENDGRID_EMAIL_FROM = String(process.env.SENDGRID_EMAIL_FROM);
//# sourceMappingURL=index.js.map