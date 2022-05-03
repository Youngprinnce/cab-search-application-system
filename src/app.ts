import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { NODE_ENV, BASE_URL } from './config';
import InitiateMongoServer from './config/db';

// Routers
import baseRouter from './api/routes';
import driverRouter from './api/routes/driver.routes';
import cabRouter from './api/routes/cab.routes';

const app: Application = express();

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Cab Search Application System API documentation',
    version: '1.0.0',
    description: 'Cab Search API documentation',
    contact: {
      name: 'API Support',
      email: 'ajiboyeadedotun16@gmail.com',
    },
  },
  servers: [
    {
      url: `${BASE_URL}/api/v1`,
      description: 'Development server',
    },
  ],
};
// options for the swagger docs
const options = {
  // import swaggerDefinitions
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

export default app;
