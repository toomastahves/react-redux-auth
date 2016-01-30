import User from '../models/User';
import { comparePasswords } from '../helpers/salt';
import { createToken } from '../helpers/token';

const signup = (req, res, user) => {
  const newUser = new User({
    email: user.email,
    password: user.password
  });
  User.findOne({ email: newUser.email }, (err, alreadyExists) => {
    if(err) {
      res.send({ error: 'Error while searching for username availability.' });
    } else if(alreadyExists) {
      res.send({ error: 'Username already taken.' });
    } else {
      newUser.save((err2, savedUser) => {
        if(err2) {
          res.send({ error: 'Error while creating user.' });
        } else {
          createToken(savedUser, (token) => {
            res.send({ email: savedUser.email, token });
          });
        }
      });
    }
  });
};

const login = (req, res, user) => {
  const enteringUser = new User({
    email: user.email,
    password: user.password
  });
  User.findOne({ email: enteringUser.email }, (err, realUser) => {
    if(err) {
      res.send({ error: 'Error while searching user.' });
    } else if(realUser) {
      comparePasswords(enteringUser.password, realUser.password, (result) => {
        if(result) {
          createToken(realUser, (token) => {
            res.send({ email: realUser.email, token });
          });
        } else {
          res.send({ error: 'Wrong password' });
        }
      });
    } else {
      res.send({ error: 'User not found.' });
    }
  });
};

export { signup, login };
