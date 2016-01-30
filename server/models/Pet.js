import mongoose, { Schema } from 'mongoose';

const Pet = new Schema({
  name: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: false
  }
});

export default mongoose.model('Pet', Pet);
