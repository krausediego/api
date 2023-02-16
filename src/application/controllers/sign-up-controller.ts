import { getHttpError, ok } from '@/application/helpers';
import { Controller, Http } from '@/application/interfaces';
import { SignUp } from '@/domain/interfaces/services';

type SignUpHandler = () => SignUp;
export class SignUpController implements Controller {
  constructor(private readonly signUpService: SignUpHandler) {}

  public async handle({
    data,
  }: Http.Request<SignUp.Params>): Promise<Http.Response> {
    try {
      const message = await this.signUpService().run(data);
      return ok({ ...message });
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
