import Pet from '../models/Pet';

const getPets = (req, res) => {
  Pet.find({}, (err, result) => {
    if(!err) {
      res.send({ message: 'Success', pets: result });
    } else {
      res.send({ message: 'Error getting data from DB.' });
    }
  });
};

const createPet = (req, res, _id, pet) => {
  const p = new Pet();
  p.name = pet.name;
  p.creator = _id;
  p.save((err, result) => {
    if(!err) {
      res.send({ message: 'Save success', pet: result });
    } else {
      res.send({ message: 'Error saving pet.' });
    }
  });
};

export { getPets, createPet };
