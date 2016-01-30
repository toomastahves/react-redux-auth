import bcrypt from 'bcrypt';

const createSalt = (password, next) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if(!err) {
      return next(hash);
    }
  });
};

const comparePasswords = (enteredPassword, realPassword, next) => {
  bcrypt.compare(enteredPassword, realPassword, (err, res) => {
    if(!err) {
      return next(res);
    }
  });
};

export { createSalt, comparePasswords };
