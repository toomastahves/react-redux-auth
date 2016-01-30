import express from 'express';
import mongodb from './config/mongodb';
import middleware from './middleware/common';
import routes from './routes/';

const app = express();
mongodb();
middleware(app);
routes(app);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
