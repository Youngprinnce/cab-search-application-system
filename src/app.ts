import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { NODE_ENV, BASE_URL } from './config';

// Routers
import baseRouter from './api/routes';

const app: Application = express();

// Middlewares
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

// logging
if (NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('tiny'));
}

// Routes
app.use('/', baseRouter);

export default app;
