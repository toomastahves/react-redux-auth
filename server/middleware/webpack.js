import webpack from 'webpack';
import config from '../../webpack.config.dev';

const webpackMiddleware = (app) => {
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    quiet: true,
    noInfo: true,
    contentBase: './public',
    historyApiFallback: true
  }));

  app.use(require('webpack-hot-middleware')(compiler));
};

export default webpackMiddleware;
