import { Router } from 'express';
const router = new Router();
import { getPets, createPet } from '../controllers/pets.controller';
import { decodeToken } from '../helpers/token';

router.get('/', (req, res) => {
  getPets(req, res);
});

router.post('/', (req, res) => {
  const token = req.headers['x-access-token'];
  const pet = {
    name: req.body.name
  };
  if(token) {
    decodeToken(token, (payload) => {
      if(payload.sub) {
        createPet(req, res, payload.sub, pet);
      } else {
        res.send({ message: 'Not authorized to create pets.' });
      }
    });
  } else {
    res.send({ message: 'No token provided.' });
  }
});

export default router;
