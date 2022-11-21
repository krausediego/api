import { CreateUser, Hash, ICreateUser } from '@/domain/interfaces';

export class CreateUserService implements CreateUser {
  constructor(
    private readonly hash: Hash,
    private readonly createUser: ICreateUser,
  ) {}

  async run(params: CreateUser.Params): Promise<CreateUser.Response> {
    try {
      const { email, password, username } = params;

      if (!email) {
        throw new Error('O campo de email é obrigatório');
      }

      if (!password) {
        throw new Error('O campo de senha é obrigatório');
      }

      if (!username) {
        throw new Error('O campo username é obrigatório');
      }

      const passwordHashed = await this.hash.createHash(password);

      await this.createUser.createNewUser({
        email,
        username,
        password: passwordHashed,
      });

      return { message: 'Usuario criado com sucesso' };
    } catch (error: any) {
      throw new error(error);
    }
  }
}
