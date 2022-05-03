import 'dotenv/config';

export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const { BASE_URL } = process.env;
export const DATABASE_URL = String(process.env.DATABASE_URL);
export const JWT_SECRET_KEY = String(process.env.JWT_SECRET_KEY);
export const SENDGRID_API_KEY = String(process.env.SENDGRID_API_KEY);
export const SENDGRID_EMAIL_FROM = String(process.env.SENDGRID_EMAIL_FROM);
