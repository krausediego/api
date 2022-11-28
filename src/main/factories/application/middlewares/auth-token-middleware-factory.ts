import { Middleware } from '@/application/interfaces';
import { AuthTokenMiddleware } from '@/application/middlewares';
import { makeToken } from '../../infra';

export const makeAuthTokenMiddleware = (): Middleware => {
  return new AuthTokenMiddleware(makeToken());
};
