import { adaptMiddleware } from '@/main/adapters/express-middleware';
import { makeAuthTokenMiddleware } from '../factories/application';

export const authToken = adaptMiddleware(makeAuthTokenMiddleware());
