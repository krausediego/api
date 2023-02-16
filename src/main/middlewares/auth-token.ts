import { adaptMiddleware } from '@/main/adapters/express-middleware';
import { makeAuthTokenMiddleware } from '@/main/factories/application';

export const authToken = adaptMiddleware(makeAuthTokenMiddleware());
