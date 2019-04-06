const config = require('../commons/config');
const logger = require('../commons/logger');
const { get } = require('../commons/request');

const ticker = async (coin) => {
  const url = `${config.get('MERCADOBITCOIN_URL')}/${coin}/ticker`;
  try {
    let response = {};
    const result = await get(url);
    response[coin] = result.body.ticker;
    logger.info(`Response: ${JSON.stringify(response)}`);
  } catch (err) {
    logger.error(`Error: ${err.message}`);
  }
};

module.exports = ticker;
