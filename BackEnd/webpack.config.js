const path = require('path');

module.exports = {
  entry: './server.js', // Change this to your main backend file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node', // Specify the target environment as Node.js
};
