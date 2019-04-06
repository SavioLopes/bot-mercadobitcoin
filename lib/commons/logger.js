const Winston = require('winston');

let logger;

(function createLogger() {
  logger = new (Winston.Logger)({
    transports: [
      new (Winston.transports.Console)({
        colorize: true,
        timestamp() {
          return (new Date()).toLocaleTimeString();
        },
        prettyPrint: true
      })
    ]
  });
}());

module.exports = logger;