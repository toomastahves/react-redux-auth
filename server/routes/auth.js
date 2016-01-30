import { Router } from 'express';
const router = new Router();
import { signup, login, loginjwt } from '../controllers/auth.controller';

router.post('/signup', (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  if(!user.email || !user.password) {
    res.json({ error: 'Empty email or password not allowed.' });
  } else {
    signup(req, res, user);
  }
});

router.post('/login', (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  if(!user.email || !user.password) {
    res.json({ error: 'Empty email or password not allowed.' });
  } else {
    login(req, res, user);
  }
});

router.post('/loginjwt', (req, res) => {
  const token = req.headers['x-access-token'];
  if(token) {
    loginjwt(req, res, token);
  } else {
    res.json({ error: 'Token not provided.' });
  }
});

export default router;
