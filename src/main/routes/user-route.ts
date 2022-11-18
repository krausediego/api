import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeCreateUserController } from '../factories/application';

export default (router: Router): void => {
  router.post('/create-user', adaptRoute(makeCreateUserController()));
};
