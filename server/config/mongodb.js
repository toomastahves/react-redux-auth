import mongoose from 'mongoose';

const mongodb = () => {
  const url = process.env.MONGOLAB_URI || 'mongodb://user:pass@ds037005.mongolab.com:37005/toomastahvesdb';
  mongoose.connect(url);
  console.log('Connected to MongoDB.');
};

export default mongodb;
