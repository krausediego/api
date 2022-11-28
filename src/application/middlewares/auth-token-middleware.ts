import { Token } from '@/domain/interfaces';
import { ok } from '../helpers';
import { Http, Middleware } from '../interfaces';

export class AuthTokenMiddleware implements Middleware {
  constructor(private readonly token: Token) {}

  public async handle(params: Http.Request<any>): Promise<Http.Response> {
    await this.token.verifyToken(params.data.accessToken);

    return ok({});
  }
}
