const path = require('path');

module.exports = {
  dbPath: path.resolve(__dirname, '../../../database.sqlite'),
  options: {
    verbose: console.log // Remove in production
  }
};