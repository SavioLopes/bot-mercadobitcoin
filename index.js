const appName = require('./package.json').name;
const application = require('./lib/application');
const logger = require('winston');

const shutdown = () => {
  logger.info('Server receive signal to shutdown.');
  application.close(() => {
    logger.error('Gracefully shutdown done');
    process.exit(1);
  });
};

process.on('SIGTERM', shutdown)
  .on('SIGINT', shutdown)
  .on('SIGHUP', shutdown)
  .on('uncaughtException', (err) => {
    logger.error(`uncaughtException caught the error: ${JSON.stringify(err)}`);
    throw err;
  });

process.title = appName;

application.start((error) => {
  if (error) {
    logger.error('[APP] initialization failed', error);
  } else {
    logger.info('Service Task Manager Running...');
  }
});
