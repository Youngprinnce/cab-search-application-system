import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { NODE_ENV, BASE_URL } from './config';
import InitiateMongoServer from './config/db';

// Routers
import baseRouter from './api/routes';
import driverRouter from './api/routes/driver.routes';

const app: Application = express();


// Initiate Database Connection
InitiateMongoServer();

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
app.use('/api/v1', driverRouter);

export default app;
