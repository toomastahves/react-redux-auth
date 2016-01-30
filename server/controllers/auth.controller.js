import User from '../models/User';
import { comparePasswords } from '../helpers/salt';
import { createToken } from '../helpers/token';

const signUp = (req, res, user) => {
  const newUser = new User({
    email: user.email,
    password: user.password
  });
  User.findOne({ email: newUser.email }, (err, alreadyExists) => {
    if(!err) {
      if(alreadyExists) {
        res.send({ message: 'user already exists ' });
      } else {
        newUser.save((err2, savedUser) => {
          if(!err2) {
            createToken(savedUser, (token) => {
              res.send({
                message: 'user saved',
                email: savedUser.email,
                token
              });
            });
          } else {
            res.send(err2);
          }
        });
      }
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
      res.send(err);
    }
    if(realUser) {
      comparePasswords(enteringUser.password, realUser.password, (result) => {
        if(result) {
          createToken(realUser, (token) => {
            res.send({
              message: 'logged in',
              email: realUser.email,
              token
            });
          });
        } else {
          res.send({ message: 'nok' });
        }
      });
    }
  });
};

export { signUp, login };
