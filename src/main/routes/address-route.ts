import { Router } from 'express';
import { adaptMiddleware, adaptRoute } from '@/main/adapters';
import {
  makeCreateAddressController,
  makeCreateAddressValidator,
  makeGetAllAddressController,
  makeGetAllAddressValidator,
  makeUpdateAddressController,
  makeUpdateAddressValidator,
} from '@/main/factories/application';
import { authToken } from '../middlewares';

export default (router: Router): void => {
  router.post(
    '/create-address',
    // authToken,
    adaptMiddleware(makeCreateAddressValidator()),
    adaptRoute(makeCreateAddressController()),
  );

  router.get(
    '/get-all-address',
    authToken,
    adaptMiddleware(makeGetAllAddressValidator()),
    adaptRoute(makeGetAllAddressController()),
  );

  router.put(
    '/update-address',
    authToken,
    adaptMiddleware(makeUpdateAddressValidator()),
    adaptRoute(makeUpdateAddressController()),
  );
};
