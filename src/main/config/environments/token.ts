import * as env from 'env-var';

export default {
  secret: env.get('SECRET').asString(),
};
