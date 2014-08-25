var requirejs = require('requirejs');

requirejs.config({
  baseUrl: __dirname
});
module.exports = requirejs('country');
