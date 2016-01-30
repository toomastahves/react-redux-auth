import mongoose, { Schema } from 'mongoose';
import { createSalt } from '../helpers/salt';

const User = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean
  }
});

User.pre('save', function(next) {
  const password = this.password;
  createSalt(password, (hashed) => {
    this.password = hashed;
    next();
  });
});

export default mongoose.model('User', User);
