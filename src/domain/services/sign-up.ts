import { SignUp, Hash, ISignUp } from '@/domain/interfaces';

export class SignUpService implements SignUp {
  constructor(private readonly hash: Hash, private readonly signUp: ISignUp) {}

  async run(params: SignUp.Params): Promise<SignUp.Response> {
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

    await this.signUp.createNewUser({
      email,
      username,
      password: passwordHashed,
    });

    return { message: 'Usuario criado com sucesso' };
  }
}
