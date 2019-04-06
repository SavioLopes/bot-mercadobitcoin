const request = require('request');

const get = (url, qs) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      url,
      qs,
      json: true,
      headers: {
        'content-type': 'application/json'
      }
    }, (err, response) => {
      if (err) {
        return reject(err);
      }
      resolve(response);
    });
  })
};

module.exports = get;
