import { User } from '@prisma/client';

export interface SignUp {
  run(params: SignUp.Params): Promise<SignUp.Response>;
}

export namespace SignUp {
  export type Params = Omit<User, 'id'>;

  export type Response = {
    message: string;
  };
}
