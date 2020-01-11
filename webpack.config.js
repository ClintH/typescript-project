const path = require('path');

module.exports = {
  entry: './build/web/index.js',
  output: {
    filename: 'browser.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
