import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './routes/emojis';
import users from './routes/users';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/users', users);

export default router;
