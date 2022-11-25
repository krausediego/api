import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeCreateCustomerController } from '../factories/application';

export default (router: Router): void => {
  router.post('/customer', adaptRoute(makeCreateCustomerController()));
};
