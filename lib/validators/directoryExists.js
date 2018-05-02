const logger = require('../kit').logger;
const fs = require('fs');
const noop = () => {};

module.exports = ({ path, message = "Directory doesn't exist.", fail = noop }) => {
  const directoryExists = fs.existsSync(path);

  if (!directoryExists) {
    logger.Error(message, { hideTimestamp: true });
    fail();
    process.exit(1);
  }
};