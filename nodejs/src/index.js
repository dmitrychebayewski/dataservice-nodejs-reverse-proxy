import regeneratorRuntime from 'regenerator-runtime/runtime';
import http from 'http';

import { createApp } from './app';
import { NODE_ENV, PORT } from './constants';
import { logger } from './utils/logger';
import { configureContainer } from './di/container';

{
  logger.info('Connected to database!');

  const container = configureContainer();
  const app = createApp(container);

  const server = http.createServer(app.callback());

  server.on('close', () => {
    logger.info('Server closing, bye!');
  });

  logger.info('Server created, ready to listen', { scope: 'startup' });

  app.listen(PORT, () => {
    logger.info(
      `Server listening on ${PORT} in ${NODE_ENV} mode  PID: ${process.pid}`
    );
  });
}
