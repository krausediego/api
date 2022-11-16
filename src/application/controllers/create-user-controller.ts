import { Controller, Http } from '@/application/interfaces';
import { getHttpError, ok } from '@/application/helpers';
import { CreateUser } from '@/domain/interfaces/services';

type CreateUserHandler = () => CreateUser;
export class CreateUserController implements Controller {
  constructor(private readonly createUserService: CreateUserHandler) {}

  public async handle({
    data,
  }: Http.Request<CreateUser.Params>): Promise<Http.Response> {
    try {
      const message = await this.createUserService().run(data);
      return ok({ ...message });
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
