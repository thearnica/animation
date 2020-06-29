const baseSetup = require('../webpack.config');

module.exports = function ({config}) {

  config.optimization = config.optimization || {};
  config.optimization.namedModules = true;

  config.module = baseSetup.module;
  config.resolve = baseSetup.resolve;

  return config;
};
