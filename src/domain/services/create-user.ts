import { CreateUser } from '@/domain/interfaces';

export class CreateUserService implements CreateUser {
  constructor() {}

  async run(params: CreateUser.Params): Promise<CreateUser.Response> {
    return { message: 'Criou o user' };
  }
}
