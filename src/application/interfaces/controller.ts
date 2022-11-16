import { Http } from '@/application/interfaces';

export interface Controller {
  handle: (request: Http.Request) => Promise<Http.Response>;
}
