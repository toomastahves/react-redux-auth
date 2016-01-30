import express from 'express';
import mongodb from './config/mongodb';
import expressMiddleware from './middleware/';
import routes from './routes/';

const app = express();
mongodb();
expressMiddleware(app);
routes(app);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
