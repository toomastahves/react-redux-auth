import jwt from 'jwt-simple';

const createToken = (user, next) => {
  const payload = {
    sub: user._id
  };
  const token = jwt.encode(payload, 'rainbow');
  return next(token);
};

const decodeToken = (token, next) => {
  const payload = jwt.decode(token, 'rainbow');
  return next(payload);
};

export { createToken, decodeToken };
