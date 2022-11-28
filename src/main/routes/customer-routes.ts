import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeCreateCustomerController } from '../factories/application';
import { authToken } from '../middlewares';

export default (router: Router): void => {
  router.post(
    '/customer',
    authToken,
    adaptRoute(makeCreateCustomerController()),
  );
};
