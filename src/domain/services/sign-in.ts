import isNull from 'lodash/isNull';

import { Hash, IFindUser, SignIn, Token } from '@/domain/interfaces';

export class SignInService implements SignIn {
  constructor(
    private readonly findUser: IFindUser,
    private readonly hash: Hash,
    private readonly token: Token,
  ) {}

  public async run(params: SignIn.Params): Promise<SignIn.Response> {
    this.validateFields(params);
    const { emailOrUsername, password } = params;

    const user = await this.findUser.findUserGeneric({
      where: {
        OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    });

    if (isNull(user)) {
      throw new Error('Nome de usuário / Email ou senha incorretos');
    }

    const passwordMatch = await this.hash.compareHash(password, user.password);

    if (!passwordMatch) {
      throw new Error('Nome de usuário / Email ou senha incorretos');
    }

    const token = this.token.generateToken(user);

    return { token };
  }

  private validateFields(params: SignIn.Params): void {
    if (!params.emailOrUsername) {
      throw new Error('O campo de email/username é obrigatório');
    }

    if (!params.password) {
      throw new Error('O campo de password é obrigatório');
    }
  }
}
