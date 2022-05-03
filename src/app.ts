/* eslint-disable no-unused-vars */
import express, {
  Application, json, urlencoded, Request, Response, NextFunction,
} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { NODE_ENV } from './config';
import swaggerDefinition from './config/swagger';
import InitiateMongoServer from './config/db';

// Routers
import baseRouter from './api/routes';
import driverRouter from './api/routes/driver.routes';
import cabRouter from './api/routes/cab.routes';

const app: Application = express();

const options = {
  swaggerDefinition,
  // path to the API docs
  apis: ['./src/docs/*.yaml'],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJsDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
app.use('/api/v1', cabRouter);

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    status: 'error',
    reason: err.message,
  });
});

// error handler for 404
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: 'failure',
    reason: 'Could not find the requested resource on the server!',
  });
});

export default app;
