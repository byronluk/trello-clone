const { Pool } = require("pg");

const pool = new Pool();

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
  getClient: callback => {
    pool.connect((err, client, done) => {
      callback(err, client, done);
    });
  }
};
