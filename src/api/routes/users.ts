import express from 'express';

const router = express.Router();
import { UserModel } from '../models/user';

type UserResponse = {
  id: string;
  firstname: string;
  lastname: string;
};

router.get<{}, UserResponse[]>('/', async (req, res) => {
  const all: UserResponse[] = await UserModel.find({});
  res.json(all);
});

router.post<{}, UserResponse>('/', (req, res) => {
  if (req.body.firstname && req.body.lastname && req.body.email) {
    const newUser = new UserModel(req.body);

    newUser.save().then((result: any) => {
      res.json(result);
    });
  }
});

export default router;
