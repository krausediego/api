import { Router } from 'express';

import { adaptMiddleware, adaptRoute } from '@/main/adapters';

import {
  makeCreateCustomerController,
  makeCreateCustomerValidator,
  makeGetAllCustomersController,
  makeGetAllCustomersValidator,
  makeUpdateCustomerController,
  makeUpdateCustomerValidator,
  makeGetCustomerController,
} from '../factories/application';
import { authToken } from '../middlewares';

export default (router: Router): void => {
  router.post(
    '/create-customer',
    // authToken,
    adaptMiddleware(makeCreateCustomerValidator()),
    adaptRoute(makeCreateCustomerController()),
  );

  router.get(
    '/get-all-customers',
    // authToken,
    adaptMiddleware(makeGetAllCustomersValidator()),
    adaptRoute(makeGetAllCustomersController()),
  );

  router.get(
    '/get-customer/:customer_id',
    authToken,
    adaptRoute(makeGetCustomerController()),
  );

  router.put(
    '/update-customer',
    authToken,
    adaptMiddleware(makeUpdateCustomerValidator()),
    adaptRoute(makeUpdateCustomerController()),
  );
};
