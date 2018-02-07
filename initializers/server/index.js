/* eslint-disable */
const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));

require('./globals');

require('babel-core/register');
require.extensions['.css'] = () => {
  return;
};

const morgan = require('morgan');
const express = require('express');
const application = express();
const port = 3000;

application.set('views', __dirname);
application.set('view engine', 'ejs');
application.use(morgan('combined'));
application.use(express.static('src/static'));

if (__DEVELOPMENT__) {
  const webpack = require('webpack');
  const config = require('../webpack/development.js').default;
  const compiler = webpack(config);
  const webpackDev = require('webpack-dev-middleware');
  const webpackHot = require('webpack-hot-middleware');

  application.use(
    webpackDev(
      compiler,
      {
        hot: true,
        publicPath: config.output.publicPath,
        stats: { colors: true }
      }
    )
  );

  application.use(webpackHot(compiler));
}

application.get('*', require('./render').default);

application.listen(port, function() {
  console.log(`Server on ${port}`);
});
