import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import {
  makeSignInController,
  makeSignUpController,
} from '../factories/application';

export default (router: Router): void => {
  router.post('/sign_up', adaptRoute(makeSignUpController()));

  router.post('/sign_in', adaptRoute(makeSignInController()));
};
