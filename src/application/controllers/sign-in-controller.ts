import { Controller, Http } from '@/application/interfaces';
import { getHttpError, ok } from '@/application/helpers';
import { SignIn } from '@/domain/interfaces/services';

type SignInHandler = () => SignIn;
export class SignInController implements Controller {
  constructor(private readonly signInService: SignInHandler) {}

  public async handle({
    data,
  }: Http.Request<SignIn.Params>): Promise<Http.Response> {
    try {
      const message = await this.signInService().run(data);
      return ok({ ...message });
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
