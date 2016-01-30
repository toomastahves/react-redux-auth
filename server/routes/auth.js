import { Router } from 'express';
const router = new Router();
import { signup, login } from '../controllers/auth.controller';

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

export default router;
