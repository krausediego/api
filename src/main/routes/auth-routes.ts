import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeSignUpController } from '../factories/application';

export default (router: Router): void => {
  router.post('/sign_up', adaptRoute(makeSignUpController()));

  router.post('/sign_in', (_, res) => res.status(200).json({ message: 'o' }));
};
