import { createServer } from 'http';
import app from './app';
import { PORT } from './config';
import { logger } from './utils';

// Spin server
const server = createServer(app);
server.listen(PORT, () => logger.info(`Server listening on PORT ${PORT}`));

// Handle uncaught exceptions
process.on('uncaughtException', (err:any) => {
  logger.error(err.message);
  logger.info('Shutting down due to uncaught exception');
  // Close server & exit process
  server.close(() => process.exit(1));
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err:any) => {
  logger.error(err.message);
  logger.info('Shutting down due to unhandled promise rejection');
  // Close server & exit process
  server.close(() => process.exit(1));
});

export default server;
