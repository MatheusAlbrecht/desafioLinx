const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function buildConfig(configDirs) {
  return {
    entry: {
      main: [
        configDirs.DESK_DIR + '/js/main.js',
        configDirs.DESK_DIR + '/js/products.js',
        configDirs.DESK_DIR + '/js/requisition.js'
      ]
    },
    mode: "development",
    devServer:{
      open: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: configDirs.DESK_DIR + '/html/index.html'
      })
    ]
  };
}

module.exports = buildConfig;
