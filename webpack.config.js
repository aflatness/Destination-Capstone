const path = require('path');
const SRC_DIR = path.join(__dir, '/client/index.js');
const OUT_DIR = path.join(__dir, '/public');

module.exports = {
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: OUT_DIR
  },
  modules: {
    rules: [
      {
        test: /(\.js|\.jsx)?/,
        excludes: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            }
          ]
        }
      }
    ]
  }
}