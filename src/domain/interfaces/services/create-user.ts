import { User } from '@prisma/client';

export interface CreateUser {
  run(params: CreateUser.Params): Promise<CreateUser.Response>;
}

export namespace CreateUser {
  export type Params = Omit<User, 'id'>;

  export type Response = {
    message: string;
  };
}
