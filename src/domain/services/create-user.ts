import { CreateUser } from '@/domain/interfaces';

export class CreateUserService implements CreateUser {
  constructor() {}

  async run(params: CreateUser.Params): Promise<CreateUser.Response> {
    try {
      const { email, password, username } = params;
      console.log(email);
    } catch (error: any) {}
  }
}
