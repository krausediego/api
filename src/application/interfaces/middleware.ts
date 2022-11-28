import { Http } from './http';

export interface Middleware {
  handle: (request: Http.Request) => Promise<Http.Response>;
}
