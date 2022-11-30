import { Token } from '@/domain/interfaces';
import { getHttpError, noContent } from '../helpers';
import { Http, Middleware } from '../interfaces';

export class AuthTokenMiddleware implements Middleware {
  constructor(private readonly token: Token) {}

  public async handle(params: Http.Request<any>): Promise<Http.Response> {
    try {
      await this.token.verifyToken(params.data.accessToken);

      return noContent();
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
