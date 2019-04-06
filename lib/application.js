const schedule = require('node-schedule');
const config = require('./commons/config');
const { ticker } = require('./methods');

const coins = ['BTC', 'LTC', 'BCH', 'XRP', 'ETH'];

const startJobs = () => {
  coins.forEach((coin) => {
    ticker(coin);
  });
};

const server = (() => {
  const start = (callback) => {
    try {
      schedule.scheduleJob(`*/${config.get('SECONDS_TO_VERIFY_COINS')} * * * * *`, () => {
        startJobs();
      });
      callback(null);
    } catch (error) {
      callback(error);
    }
  };

  const close = () => {
    process.exit(0);
  };

  return {
    start,
    close
  };
})();

module.exports = server;