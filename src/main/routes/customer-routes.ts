import { Router } from 'express';
import { adaptMiddleware, adaptRoute } from '@/main/adapters';
import {
  makeCreateCustomerController,
  makeCreateCustomerValidator,
} from '../factories/application';
import { authToken } from '../middlewares';

export default (router: Router): void => {
  router.post(
    '/create-customer',
    authToken,
    adaptMiddleware(makeCreateCustomerValidator()),
    adaptRoute(makeCreateCustomerController()),
  );
};
