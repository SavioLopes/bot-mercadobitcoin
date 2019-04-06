const nconf = require('nconf');

nconf.argv()
  .env()
  .file('conf/config.json')
  .defaults();

module.exports = nconf;