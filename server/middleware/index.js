import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import favicon from 'serve-favicon';
import responseTime from 'response-time';
import compression from 'compression';
import helmet from 'helmet';
import errorhandler from 'errorhandler';
import webpack from './webpack';

const expressMiddleware = (app) => {
  app.use(express.static('public'));
  app.use(favicon('public/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(responseTime());
  app.use(compression());
  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'Fantasy Unicorns' }));

  if(process.env.NODE_ENV !== 'production') {
    webpack(app);
    app.use(errorhandler());
  }
};

export default expressMiddleware;
