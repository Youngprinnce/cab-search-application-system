import { BASE_URL } from '.';

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

export default swaggerDefinition;
